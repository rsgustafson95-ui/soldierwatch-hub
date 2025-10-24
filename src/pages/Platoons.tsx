import { Shield, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mockPlatoons = [
  {
    id: 1,
    name: "1st Platoon",
    leader: "1LT Thompson",
    soldiers: 32,
    readiness: 95,
  },
  {
    id: 2,
    name: "2nd Platoon",
    leader: "1LT Garcia",
    soldiers: 28,
    readiness: 92,
  },
  {
    id: 3,
    name: "3rd Platoon",
    leader: "1LT Chen",
    soldiers: 30,
    readiness: 89,
  },
  {
    id: 4,
    name: "4th Platoon",
    leader: "1LT Rodriguez",
    soldiers: 34,
    readiness: 86,
  },
];

const Platoons = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Platoon Management</h1>
            <p className="text-muted-foreground mt-1">Unit structure and readiness</p>
          </div>
          <Button className="gap-2">
            <Shield className="h-4 w-4" />
            Add Platoon
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockPlatoons.map((platoon) => (
            <Card key={platoon.id} className="shadow-tactical hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{platoon.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Led by {platoon.leader}</p>
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                    <Users className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">{platoon.soldiers}</p>
                      <p className="text-xs text-muted-foreground">Soldiers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">{platoon.readiness}%</p>
                      <p className="text-xs text-muted-foreground">Readiness</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Readiness Score</span>
                    <span className="font-medium">{platoon.readiness}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all"
                      style={{ width: `${platoon.readiness}%` }}
                    />
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platoons;
