import CreatePostForm, { templatesData } from "@/components/CreatePostForm";

interface CreatePageProps {
  searchParams: Promise<{ templateId?: string }>;
}

export default async function CreatePostPage({
  searchParams,
}: CreatePageProps) {
  const params = await searchParams;

  // Fetch template if specified
  let template = null;
  if (params.templateId) {
    const template = templatesData.find((t) => t.id === params.templateId);
  }

  return (
    <main className="min-h-screen w-full p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Create New Post
          </h1>
          <p className="text-muted-foreground">
            Generate AI-powered content for your Instagram posts
          </p>
        </div>

        <CreatePostForm template={template} />
      </div>
    </main>
  );
}
