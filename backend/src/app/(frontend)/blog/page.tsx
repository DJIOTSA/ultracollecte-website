import { Navbar } from '@/components/layout/Navbar'
import { BlogPosts } from '@/components/pages/blog/BlogPosts'
import { Footer } from '@/components/sections/Footer'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <BlogPosts />
      <Footer />
    </main>
  )
}
