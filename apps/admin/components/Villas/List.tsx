"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { Button } from "@workspace/ui/components/button";
import { Plus } from "lucide-react";
import Form from "./Form";

export default function VillasList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingVilla, setEditingVilla] = useState(null);
  const isLoading = false;
  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#1A3A52]">All Villas (9)</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              className="bg-[#C17E61] hover:bg-[#a86a50]"
              onClick={() => setEditingVilla(null)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Villa
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingVilla ? "Edit Villa" : "Add New Villa"}
              </DialogTitle>
            </DialogHeader>
            <Form />
          </DialogContent>
        </Dialog>{" "}
      </div>
    </div>
  );
}
