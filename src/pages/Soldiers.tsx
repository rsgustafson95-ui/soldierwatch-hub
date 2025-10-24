import { useState } from "react";
import { Search, Filter, UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Placeholder data - will be replaced with real data from Lovable Cloud
const mockSoldiers = [
  {
    id: 1,
    dodid: "1234567890",
    lastName: "Johnson",
    firstName: "Michael",
    rank: "SGT",
    mos: "11B",
    platoon: "1st Platoon",
    squad: "Alpha",
    flagged: false,
  },
  {
    id: 2,
    dodid: "2345678901",
    lastName: "Martinez",
    firstName: "Sofia",
    rank: "SPC",
    mos: "68W",
    platoon: "1st Platoon",
    squad: "Bravo",
    flagged: true,
  },
  {
    id: 3,
    dodid: "3456789012",
    lastName: "Anderson",
    firstName: "James",
    rank: "CPL",
    mos: "25B",
    platoon: "2nd Platoon",
    squad: "Alpha",
    flagged: false,
  },
  {
    id: 4,
    dodid: "4567890123",
    lastName: "Williams",
    firstName: "Emma",
    rank: "PFC",
    mos: "92G",
    platoon: "2nd Platoon",
    squad: "Charlie",
    flagged: false,
  },
];

const Soldiers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSoldiers = mockSoldiers.filter((soldier) =>
    `${soldier.lastName} ${soldier.firstName} ${soldier.rank} ${soldier.mos}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Soldier Directory</h1>
            <p className="text-muted-foreground mt-1">Manage unit personnel</p>
          </div>
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            Add Soldier
          </Button>
        </div>

        <Card className="shadow-tactical">
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <CardTitle>Personnel Roster</CardTitle>
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, rank, or MOS..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Rank</TableHead>
                    <TableHead>Last Name</TableHead>
                    <TableHead>First Name</TableHead>
                    <TableHead>MOS</TableHead>
                    <TableHead>Platoon</TableHead>
                    <TableHead>Squad</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSoldiers.map((soldier) => (
                    <TableRow 
                      key={soldier.id}
                      className="cursor-pointer hover:bg-muted/30 transition-colors"
                    >
                      <TableCell className="font-medium">{soldier.rank}</TableCell>
                      <TableCell>{soldier.lastName}</TableCell>
                      <TableCell>{soldier.firstName}</TableCell>
                      <TableCell>{soldier.mos}</TableCell>
                      <TableCell>{soldier.platoon}</TableCell>
                      <TableCell>{soldier.squad}</TableCell>
                      <TableCell>
                        {soldier.flagged ? (
                          <Badge variant="destructive">Flagged</Badge>
                        ) : (
                          <Badge className="bg-primary">Active</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {filteredSoldiers.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No soldiers found matching your search.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Soldiers;
