'use client'

import React from 'react'
import { CheckCircle, Phone, ArrowRight, FileText, Award, BookOpen } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const AdmitLetterHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4 md:p-8">
      <div className="container max-w-7xl mx-auto">
        <Card className="bg-zinc-600 border-0 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 p-6 md:p-10 lg:p-12">
           

            {/* Right Visual Section */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Animated Floating Letter */}
                <Card className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden border-0 animate-float">
                  {/* Decorative Header Stripe */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 to-yellow-400"></div>
                  
                  {/* Letter Header */}
                  <div className="flex justify-between items-center mb-8 pt-4">
                    <div>
                      <h2 className="text-2xl font-bold text-blue-900">
                        ADMIT<span className="text-amber-500">LETTER</span>
                      </h2>
                      <p className="text-sm text-blue-600">Official Admission Service</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      VERIFIED
                    </Badge>
                  </div>

                  {/* Letter Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">OFFER OF ADMISSION</h3>
                      <div className="h-1 w-16 bg-amber-400 rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-gray-700">
                        This is to certify that <strong className="text-blue-900">Johnathan Smith</strong> has been 
                        offered provisional admission to the <strong className="text-blue-900">Bachelor of Computer Science</strong> 
                        program.
                      </p>
                      
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-semibold text-blue-900">University of Technology</div>
                            <div className="text-sm text-blue-600">Academic Year 2024-25</div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700">
                        This offer letter is issued electronically and is valid for enrollment purposes. 
                        Complete registration within 30 days.
                      </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <FileText className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-blue-900">Official Format</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <BookOpen className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-blue-900">280+ Courses</span>
                      </div>
                    </div>
                  </div>

                  {/* Stamp */}
                  <div className="absolute bottom-6 right-6">
                    <div className="relative">
                      <div className="h-20 w-20 rounded-full border-4 border-dashed border-amber-300 bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center rotate-12">
                        <div className="text-center">
                          <div className="font-bold text-amber-700 text-sm">APPROVED</div>
                          <div className="text-xs text-amber-600">Official Stamp</div>
                        </div>
                      </div>
                      <div className="absolute -inset-1 border-2 border-amber-200 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>
                </Card>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full opacity-10 blur-xl"></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AdmitLetterHero