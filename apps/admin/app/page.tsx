import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { LayoutDashboard, Calendar, Home, Settings } from "lucide-react";
import Stats from "@/components/Stats";
import VillaList from "@/components/Villas/List";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1A3A52] mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your villa rentals and bookings
          </p>
        </div>
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="bg-white border">
            <TabsTrigger value="dashboard" className="gap-2">
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="bookings" className="gap-2">
              <Calendar className="w-4 h-4" />
              Bookings & Inquiries
            </TabsTrigger>
            <TabsTrigger value="villas" className="gap-2">
              <Home className="w-4 h-4" />
              Villas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <Stats />
          </TabsContent>

          <TabsContent value="bookings"></TabsContent>

          <TabsContent value="villas">
            <VillaList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
