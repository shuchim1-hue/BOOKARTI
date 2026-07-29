"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { BarChart3, Bell, Calendar, Users, FileText, LogOut, MessageSquare, Search, Settings, TrendingUp } from "lucide-react"

export default function AdminPageClient() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return (
      <section className="relative min-h-screen hero-gradient flex items-center">
        <div className="max-w-md mx-auto px-4 w-full">
          <Card className="backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-accent mx-auto mb-4 flex items-center justify-center font-bold text-primary text-2xl">
                  CMV
                </div>
                <h2 className="text-2xl font-bold">Admin Dashboard</h2>
                <p className="text-sm text-muted-foreground mt-1">Authorized access only</p>
              </div>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true) }}>
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Username</Label>
                  <Input id="admin-email" placeholder="admin@caminakshiverma.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Password</Label>
                  <Input id="admin-password" type="password" placeholder="Enter password" required />
                </div>
                <Button type="submit" className="w-full" size="lg">Sign In to Dashboard</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  const stats = [
    { icon: <Calendar className="w-5 h-5" />, label: "Appointments", value: "12", change: "+3 this week", color: "text-blue-600 bg-blue-100" },
    { icon: <Users className="w-5 h-5" />, label: "Active Clients", value: "48", change: "+5 this month", color: "text-emerald-600 bg-emerald-100" },
    { icon: <FileText className="w-5 h-5" />, label: "Pending Tasks", value: "8", change: "3 overdue", color: "text-amber-600 bg-amber-100" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Revenue (MTD)", value: "₹2.4L", change: "+12% vs last month", color: "text-purple-600 bg-purple-100" },
  ]

  return (
    <>
      <section className="relative pt-24 pb-6 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-white/60 text-sm">Welcome back! Here&apos;s your practice overview.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="premium-outline" size="sm" onClick={() => setIsLoggedIn(false)}>
                <LogOut className="w-4 h-4 mr-2" /> Sign Out
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <Card key={s.label} variant="hover">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${s.color} flex items-center justify-center`}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="text-xl font-bold">{s.value}</p>
                    <p className="text-[10px] text-muted-foreground">{s.change}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">Recent Appointments</h3>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Rohit Malhotra", service: "Tax Planning", date: "Today, 10:00 AM", status: "Confirmed" },
                    { name: "Priya Sharma", service: "GST Return", date: "Today, 2:00 PM", status: "Pending" },
                    { name: "Amit Singh", service: "Company Registration", date: "Tomorrow, 11:00 AM", status: "Confirmed" },
                    { name: "Neha Gupta", service: "Audit", date: "Jul 30, 3:00 PM", status: "Rescheduled" },
                  ].map((apt) => (
                    <div key={apt.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-medium text-sm">{apt.name}</p>
                        <p className="text-xs text-muted-foreground">{apt.service} - {apt.date}</p>
                      </div>
                      <Badge variant={apt.status === "Confirmed" ? "gold" : apt.status === "Pending" ? "outline" : "default"}>
                        {apt.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">Quick Actions</h3>
                </div>
                <div className="space-y-2">
                  {[
                    { icon: <Calendar className="w-4 h-4" />, label: "New Appointment" },
                    { icon: <Users className="w-4 h-4" />, label: "Add Client" },
                    { icon: <FileText className="w-4 h-4" />, label: "Create Invoice" },
                    { icon: <MessageSquare className="w-4 h-4" />, label: "Send Reminder" },
                    { icon: <BarChart3 className="w-4 h-4" />, label: "View Reports" },
                  ].map((action) => (
                    <Button key={action.label} variant="outline" className="w-full justify-start text-sm" size="sm">
                      {action.icon}
                      <span className="ml-3">{action.label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
