"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const userSettingsSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  bio: z.string().optional(),
  image: z.string().optional(),
})

type UserSettingsFormValues = z.infer<typeof userSettingsSchema>

interface UserProfile {
  id: string
  name: string
  email: string
  image?: string
  bio?: string
}

interface UserSettingsFormProps {
  initialData: UserProfile
}

export function UserSettingsForm({ initialData }: UserSettingsFormProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSettingsFormValues>({
    resolver: zodResolver(userSettingsSchema),
    defaultValues: {
      name: initialData.name,
      bio: initialData.bio || "",
      image: initialData.image || "",
    },
  })

  const onSubmit = async (data: UserSettingsFormValues) => {
    setIsLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const response = await fetch(`/api/users/${initialData.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.error || "Failed to update profile")
        return
      }

      setSuccess("Profile updated successfully")
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })

      router.refresh()
    } catch (error) {
      setError("An unexpected error occurred. Please try again.")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
        <CardDescription>Update your profile information and preferences.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="bg-green-50 text-green-800">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={initialData.image || ""} alt={initialData.name} />
              <AvatarFallback>{initialData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="image">Profile Image URL</Label>
                <Input id="image" {...register("image")} aria-invalid={errors.image ? "true" : "false"} />
                {errors.image && <p className="text-sm text-destructive">{errors.image.message}</p>}
              </div>
              <p className="text-xs text-muted-foreground">Enter a URL for your profile image</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name")} aria-invalid={errors.name ? "true" : "false"} />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={initialData.email} disabled className="bg-muted" />
            <p className="text-xs text-muted-foreground">Your email address cannot be changed</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" {...register("bio")} rows={4} placeholder="Tell us a little about yourself" />
          </div>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
