"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { AtSign, Mail, Phone, SendHorizonal, User, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner"; // Or your preferred toast library

// 1. Define Validation Schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  message: z.string().optional(),
});

function FormPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Initialize Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  // 3. Handle Submit to Google Sheets
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // REPLACE THIS URL with your Google Apps Script Web App URL
      const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL";
      
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <motion.form 
        id="ContactForm"
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white col-span-3 z-10 border border-zinc-200 p-8 rounded-md shadow-xl mr-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-sm mb-1 flex items-center gap-x-1.5 font-normal text-zinc-700">
                <User className="size-4" /> Your Name (<span className="text-red-700">Required</span>)
              </FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className="w-full border-zinc-400/60" />
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />

        {/* Phone Field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-sm mb-1 flex items-center gap-x-1.5 font-normal text-zinc-700">
                <Phone className="size-4" /> Phone Number (<span className="text-red-700">Required</span>)
              </FormLabel>
              <FormControl>
                <Input placeholder="+91 00000 00000" {...field} className="w-full border-zinc-400/60" />
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-sm mb-1 flex items-center gap-x-1.5 font-normal text-zinc-700">
                <AtSign className="size-4" /> Email Address
              </FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} className="w-full border-zinc-400/60" />
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-sm mb-1 flex items-center gap-x-1.5 font-normal text-zinc-700">
                <Mail className="size-4" /> Message
              </FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="How can we help?" {...field} className="w-full border-zinc-400/60" />
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          variant="red"
          className="w-full py-7 flex gap-2 font-bold text-lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <SendHorizonal className="size-4 group-hover:translate-x-2" />
            </>
          )}
        </Button>
        <p className="text-center py-2 text-sm text-zinc-500">By sending this message, you agree to our privacy policy.</p>
      </motion.form>
    </Form>
  );
}

export default FormPage;