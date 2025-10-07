"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Copy,
  Download,
  Hash,
  ImageIcon,
  Loader2,
  RefreshCw,
  Save,
  Sparkles,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

// We would typically fetch these from a backend or database
export const templatesData: Template[] = [
  { id: "1", name: "Modern Business Card", category: "Business" },
  { id: "2", name: "Lifestyle Quote", category: "Lifestyle" },
  { id: "3", name: "Food Photography", category: "Food" },
  { id: "4", name: "Fashion Showcase", category: "Fashion" },
  { id: "5", name: "Travel Adventure", category: "Travel" },
];

interface CreatePostFormProps {
  template: Template | null;
}

function CreatePostForm({ template }: CreatePostFormProps) {
  const [prompt, setPrompt] = useState("");
  const [generatedCaption, setGeneratedCaption] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [generatedHashtags, setGeneratedHashtags] = useState("");
  const [isGeneratingCaption, setIsGeneratingCaption] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(
    template?.category || ""
  );
  const [isSaving, setIsSaving] = useState(false);

  /** @deprecated This function is obsolete. Use generateCaption instead.  */
  const generateStaticCaption = async () => {
    if (!prompt.trim()) {
      toast.error("Error", {
        description: "Please enter a prompt for your post",
      });
      return;
    }

    setIsGeneratingCaption(true);
    // Simulate AI generation
    setTimeout(() => {
      const sampleCaptions = [
        "✨ Transform your business with innovative solutions that drive real results. Ready to take the next step? 🚀\n\n#business #innovation #growth #success #entrepreneur",
        "🌟 Discover the power of authentic storytelling in your brand journey. Every story matters, every voice counts.\n\n#storytelling #brand #authentic #marketing #content",
        "💡 Innovation isn't just about technology - it's about reimagining possibilities and creating meaningful connections.\n\n#innovation #technology #future #creativity #inspiration",
      ];
      const randomCaption =
        sampleCaptions[Math.floor(Math.random() * sampleCaptions.length)];
      const [caption, hashtags] = randomCaption.split("\n\n");
      setGeneratedCaption(caption);
      setGeneratedHashtags(hashtags);
      setIsGeneratingCaption(false);
    }, 2000);
  };

  const generateCaption = async () => {
    setIsGeneratingCaption(true);
    try {
      console.log({ prompt, selectedTemplate });
      const response = await fetch("/api/generate-caption", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: prompt,
          template: selectedTemplate,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate caption");
      }

      const data = await response.json();
      setGeneratedCaption(data.caption);
      setGeneratedHashtags(data.hashtags);

      toast.success("Caption Generated!", {
        description: "Your AI-powered caption and hashtags are ready.",
      });
    } catch (error) {
      console.error("Error generating caption:", error);
      toast.error("Generation Failed", {
        description: "Failed to generate caption. Please try again.",
      });
    } finally {
      setIsGeneratingCaption(false);
    }
  };

  const generateImage = async () => {
    if (!prompt.trim()) {
      toast.error("Error", {
        description: "Please enter a prompt for your image",
      });

      return;
    }

    setIsGeneratingImage(true);
    // Simulate AI image generation
    setTimeout(() => {
      setGeneratedImage(
        `/.jpg?height=400&width=400&query=${encodeURIComponent(
          prompt
        )}%20instagram%20post`
      );
      setIsGeneratingImage(false);
    }, 3000);
  };

  const savePost = async () => {
    if (!generatedCaption && !generatedImage) {
      toast.error("Error", {
        description: "Please generate content before saving",
      });
      return;
    }

    setIsSaving(true);
    // Simulate saving
    setTimeout(() => {
      toast.success("Success", {
        description: "Post saved successfully!",
      });
      setIsSaving(false);
    }, 1000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied", {
      description: "Content copied to clipboard",
    });
  };

  const downloadImage = () => {
    if (generatedImage) {
      const link = document.createElement("a");
      link.href = generatedImage;
      link.download = "instagram-post.jpg";
      link.click();

      toast.success("Downloaded", {
        description: "Image downloaded successfully",
      });
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left Column - Input Form */}
      <div className="space-y-6">
        {/* Template Selection */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ImageIcon className="w-5 h-5 mr-2" />
              Template Selection
            </CardTitle>
            <CardDescription>
              Choose a template to get started (optional)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Select
              value={selectedTemplate}
              onValueChange={setSelectedTemplate}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a template" />
              </SelectTrigger>
              <SelectContent>
                {templatesData.map((template) => (
                  <SelectItem key={template.id} value={template.id}>
                    {template.name}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {template.category}
                    </Badge>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Content Generation */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              Content Generation
            </CardTitle>
            <CardDescription>Describe what you want to create</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="prompt">Post Description</Label>
              <Textarea
                id="prompt"
                placeholder="Describe your post idea... (e.g., 'A motivational business post about innovation and growth')"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                className="mt-1"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={generateCaption}
                disabled={isGeneratingCaption}
                className="flex-1"
              >
                {isGeneratingCaption ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4 mr-2" />
                )}
                Generate Caption
              </Button>
              <Button
                onClick={generateImage}
                disabled={isGeneratingImage}
                variant="outline"
                className="flex-1 bg-transparent"
              >
                {isGeneratingImage ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <ImageIcon className="w-4 h-4 mr-2" />
                )}
                Generate Image
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Generated Caption */}
        {generatedCaption && (
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generated Caption
                </span>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(generatedCaption)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={generateCaption}>
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-foreground whitespace-pre-wrap">
                  {generatedCaption}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Generated Hashtags */}
        {generatedHashtags && (
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Hash className="w-5 h-5 mr-2" />
                  Generated Hashtags
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(generatedHashtags)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-primary font-medium">{generatedHashtags}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Right Column - Preview */}
      <div className="space-y-6">
        {/* Image Preview */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <ImageIcon className="w-5 h-5 mr-2" />
                Image Preview
              </span>
              {generatedImage && (
                <Button size="sm" variant="outline" onClick={downloadImage}>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              {isGeneratingImage ? (
                <div className="text-center">
                  <Loader2 className="w-8 h-8 animate-spin text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Generating image...
                  </p>
                </div>
              ) : generatedImage ? (
                <img
                  src={generatedImage || "/placeholder.svg"}
                  alt="Generated post"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Click "Generate Image" to create your visual
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Post Preview */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Instagram Post Preview</CardTitle>
            <CardDescription>
              How your post will look on Instagram
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-sm mx-auto">
              {/* Instagram Header */}
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">
                    your_account
                  </p>
                  <p className="text-xs text-gray-500">Sponsored</p>
                </div>
              </div>

              {/* Image */}
              <div className="aspect-square bg-gray-100 rounded mb-3 overflow-hidden">
                {generatedImage ? (
                  <img
                    src={generatedImage || "/placeholder.svg"}
                    alt="Post preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>

              {/* Caption */}
              <div className="text-sm text-gray-900">
                <span className="font-semibold">your_account</span>{" "}
                {generatedCaption ||
                  "Your generated caption will appear here..."}
              </div>

              {/* Hashtags */}
              {generatedHashtags && (
                <div className="text-sm text-blue-600 mt-1">
                  {generatedHashtags}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Export Options */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Export Options</CardTitle>
            <CardDescription>
              Save or export your created content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button onClick={savePost} disabled={isSaving} className="w-full">
              {isSaving ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              Save to My Posts
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={() =>
                  copyToClipboard(`${generatedCaption}\n\n${generatedHashtags}`)
                }
                disabled={!generatedCaption}
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy All
              </Button>
              <Button
                variant="outline"
                onClick={downloadImage}
                disabled={!generatedImage}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CreatePostForm;
