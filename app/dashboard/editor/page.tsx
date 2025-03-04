"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { VideoIcon } from "lucide-react";
import { useRef, useState } from "react";


const page = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [visibility, setVisibility] = useState<string>("");
  const [madeForKids, setMadeForKids] = useState<string>("");

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    changer: React.Dispatch<React.SetStateAction<string>>
  ) => {
    changer(e.target.value);
  };

  const handleUpload = () => {
    console.log("titie:", title);
    console.log("desc:", desc);
    console.log("tags:", tags);
    console.log("visibility:", visibility);
    console.log("made:", madeForKids);
    console.log("made:", videoUrl);
  };

  return (
    <div className="w-1/2 flex flex-col gap-y-5">
      <AspectRatio
        ratio={16 / 9}
        className="bg-muted flex justify-center items-center cursor-pointer"
      >
        {videoUrl ? (
          <video
            src={videoUrl}
            controls
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <VideoIcon width={50} height={100} />
        )}
      </AspectRatio>
      <Button onClick={handleIconClick}>Upload a video</Button>
      <input
        onChange={handleVideoUpload}
        ref={fileInputRef}
        type="file"
        accept="video/*"
        style={{ display: "none" }}
      />

      <div className="flex flex-col gap-y-3">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title of the video"
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <Label htmlFor="description">Description</Label>
        <Textarea
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          placeholder="Description of the video"
          className="w-full h-[200px]"
        />
      </div>

      <div className="flex flex-col gap-y-3">
        <Label htmlFor="tags">Tags</Label>
        <Input
          onChange={(e) => {
            setTags(e.target.value);
          }}
          type="text"
          placeholder="e.g., movies, films, new movies, top10movies"
          className="w-full"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="visibility" className="mb-2 text-xm font-medium">
          Choose a visibility option:
        </Label>
        <select
          onChange={(e) => {
            setVisibility(e.target.value);
          }}
          id="visibility"
          name="visibility"
          className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="public">public</option>
          <option value="private">Private</option>
          <option value="unlisted">Unlisted</option>
        </select>
      </div>

      <div>
        <Label className="font-medium ">Is this video made for kids</Label>
        <div className="flex gap-6">
          <div className="flex gap-3 items-center mt-2">
            <Input
              onChange={(e) => {
                setMadeForKids(e.target.value);
              }}
              className="w-5 h-5"
              type="radio"
              value="yes"
              name="madeForKids"
            />
            <Label className="font-medium ">Yes</Label>
          </div>
          <div className="flex gap-3 items-center mt-2">
            <Input
              onChange={(e) => {
                setMadeForKids(e.target.value);
              }}
              className="w-5 h-5"
              type="radio"
              value="no"
              name="madeForKids"
            />
            <Label className="font-medium">No</Label>
          </div>
        </div>
      </div>

      <Button onClick={handleUpload} type="submit">
        Upload
      </Button>
    </div>
  );
};

export default page;
