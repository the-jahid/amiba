'use server'

import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
})

export async function subscribeToNewsletter(formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const result = schema.safeParse({ name, email })

  if (!result.success) {
    return { success: false, message: result.error.errors[0].message }
  }

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Here you would typically add the email to your newsletter service
  return { success: true, message: `Thank you, ${name}! You've successfully subscribed to our newsletter.` }
}

