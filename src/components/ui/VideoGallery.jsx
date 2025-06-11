import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(null)

  const videos = [
    // your videos with videoId + title + thumbnail
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* card rendering loop from earlier */}
    </div>
  )
}
