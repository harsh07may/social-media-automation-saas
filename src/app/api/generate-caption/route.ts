import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { type NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const { topic, template } = await request.json();
    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });
    }

    // Create a detailed prompt for caption generation
    const captionPrompt = `Create an engaging Instagram caption for a ${template} post with a Engaging tone.

                            Topic: ${topic}

                            Requirements:
                            - Make it engaging and authentic
                            - Include a call-to-action or question to encourage engagement
                            - Keep it concise but impactful (2-4 sentences)
                            - Don't include hashtags in the caption
                            - Make it feel natural and conversational

                            Caption:`;

    // Create a prompt for hashtag generation
    const hashtagPrompt = `Generate relevant Instagram hashtags for a ${template} post about: ${topic}

                            Requirements:
                            - Generate 15-20 hashtags
                            - Mix of popular and niche hashtags
                            - Include relevant industry/category hashtags
                            - Format as a single line with hashtags separated by spaces
                            - Start with #

                            Hashtags:`;

    // Generate caption
    const { text: caption } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: captionPrompt,
      maxOutputTokens: 200,
    });

    // Generate hashtags
    const { text: hashtags } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: hashtagPrompt,
      maxOutputTokens: 150,
    });

    return NextResponse.json({
      caption: caption.trim(),
      hashtags: hashtags.trim(),
    });
  } catch (error) {
    console.error("Error generating caption:", error);
    return NextResponse.json(
      { error: "Failed to generate caption" },
      { status: 500 }
    );
  }
}
