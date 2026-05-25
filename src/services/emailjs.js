const emailJsEndpoint = 'https://api.emailjs.com/api/v1.0/email/send'

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

export function hasEmailJsConfig() {
  return Object.values(emailJsConfig).every((value) => Boolean(value && !value.startsWith('your_')))
}

export async function sendContactMessage(values, targetEmail) {
  const message = normalizeMessage(values)

  if (!hasEmailJsConfig()) {
    openMailClient(message, targetEmail)
    return { mode: 'fallback' }
  }

  const response = await fetch(emailJsEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: emailJsConfig.serviceId,
      template_id: emailJsConfig.templateId,
      user_id: emailJsConfig.publicKey,
      template_params: {
        to_email: targetEmail,
        from_name: message.name,
        from_email: message.email,
        reply_to: message.email,
        project_type: message.projectType,
        message: message.message,
        subject: `Portfolio inquiry: ${message.projectType}`,
        site_url: window.location.href,
      },
    }),
  })

  if (!response.ok) {
    throw new Error(await response.text())
  }

  return { mode: 'emailjs' }
}

function openMailClient(values, targetEmail) {
  const subject = encodeURIComponent(`Portfolio inquiry: ${values.projectType}`)
  const body = encodeURIComponent(
    `Name: ${values.name}\nEmail: ${values.email}\nProject type: ${values.projectType}\n\n${values.message}`,
  )

  window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`
}

function normalizeMessage(values) {
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    projectType: values.projectType.trim(),
    message: values.message.trim(),
  }
}
