import { Users, AlertTriangle, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  // Placeholder data - will be replaced with real data from Lovable Cloud
  const stats = [
    {
      title: "Total Soldiers",
      value: "124",
      icon: Users,
      description: "Active duty personnel",
    },
    {
      title: "Flagged Soldiers",
      value: "3",
      icon: AlertTriangle,
      description: "Requiring attention",
    },
    {
      title: "Avg PT Score",
      value: "284",
      icon: TrendingUp,
      description: "Company average",
    },
    {
      title: "Upcoming ETS",
      value: "8",
      icon: Calendar,
      description: "Next 90 days",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Unit readiness overview</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="shadow-tactical hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-tactical">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="text-sm font-medium">PT Test Added</p>
                    <p className="text-xs text-muted-foreground">SGT Johnson - Score: 295</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                  <div>
                    <p className="text-sm font-medium">Soldier Flagged</p>
                    <p className="text-xs text-muted-foreground">SPC Martinez - APFT Failure</p>
                    <p className="text-xs text-muted-foreground">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="text-sm font-medium">Profile Updated</p>
                    <p className="text-xs text-muted-foreground">CPL Anderson - Rank change</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-tactical">
            <CardHeader>
              <CardTitle>Platoon Readiness</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["1st Platoon", "2nd Platoon", "3rd Platoon", "4th Platoon"].map((platoon, idx) => (
                  <div key={platoon} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{platoon}</span>
                      <span className="text-muted-foreground">{95 - idx * 3}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all"
                        style={{ width: `${95 - idx * 3}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
