import { AppSidebar } from "@/components/AppSidebar";
import { Badge } from "@/components/ui/badge";

const App = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <AppSidebar></AppSidebar>
      <Badge variant="outline">Badge</Badge>
    </div>
  );
};

export default App;
