"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { FileText, Download, CheckCircle, Upload, CreditCard } from "lucide-react"
import Link from "next/link"

export default function ClientPortalPageClient() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return (
      <>
        <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <Badge variant="gold" className="mb-4">Client Portal</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="gold-gradient">Secure</span> Client Login
              </h1>
              <p className="text-xl text-white/70">
                Access your documents, invoices, compliance tracker, and communicate with your team.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-md mx-auto px-4">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true) }}>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="client@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Enter your password" required />
                  </div>
                  <Button type="submit" className="w-full" size="lg">Sign In</Button>
                  <div className="text-center text-sm text-muted-foreground">
                    <Link href="#" className="text-accent hover:underline">Forgot password?</Link>
                    <span className="mx-2">|</span>
                    <Link href="#" className="text-accent hover:underline">Request access</Link>
                  </div>
                </form>
              </CardContent>
            </Card>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Secured with 256-bit encryption. Your data is safe with us.
            </p>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="relative pt-32 pb-12 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center">
            <div>
              <Badge variant="gold" className="mb-2">Client Portal</Badge>
              <h1 className="text-3xl font-bold text-white">Welcome back!</h1>
            </div>
            <Button variant="premium-outline" onClick={() => setIsLoggedIn(false)}>Sign Out</Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: <Upload className="w-5 h-5" />, label: "Upload Documents", value: "12 files" },
              { icon: <Download className="w-5 h-5" />, label: "Download Reports", value: "8 available" },
              { icon: <FileText className="w-5 h-5" />, label: "Invoices", value: "3 pending" },
              { icon: <CheckCircle className="w-5 h-5" />, label: "Compliance Status", value: "95% complete" },
            ].map((item) => (
              <Card key={item.label} variant="hover">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Recent Documents</h3>
                <div className="space-y-3">
                  {["ITR Filing FY 2025-26", "GSTR-9 Annual Return", "CMA Report - Bank Loan"].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">{doc}</span>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Compliance Tracker</h3>
                <div className="space-y-3">
                  {[
                    { label: "Income Tax Return", status: "Completed" },
                    { label: "GST Annual Return", status: "In Progress" },
                    { label: "ROC Annual Filing", status: "Pending" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                      <span className="text-sm font-medium">{item.label}</span>
                      <Badge variant={item.status === "Completed" ? "gold" : "outline"}>{item.status}</Badge>
                    </div>
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
