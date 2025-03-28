import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertMessageSchema.parse(req.body);
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return res.status(400).json({ message: "Please enter a valid email address" });
      }
      
      // Store message in memory storage
      const message = await storage.createMessage(data);
      
      return res.status(200).json({ 
        success: true, 
        message: "Thank you for your message! I will get back to you soon."
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          error: fromZodError(error).message 
        });
      }
      
      return res.status(500).json({ message: "Failed to send message. Please try again later." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
