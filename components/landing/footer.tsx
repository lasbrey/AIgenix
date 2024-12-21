import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 mx-auto py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="h-auto p-0">Features</Button></li>
              <li><Button variant="link" className="h-auto p-0">Pricing</Button></li>
              <li><Button variant="link" className="h-auto p-0">Documentation</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="h-auto p-0">About</Button></li>
              <li><Button variant="link" className="h-auto p-0">Blog</Button></li>
              <li><Button variant="link" className="h-auto p-0">Careers</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="h-auto p-0">Privacy</Button></li>
              <li><Button variant="link" className="h-auto p-0">Terms</Button></li>
              <li><Button variant="link" className="h-auto p-0">Security</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AIgenix Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}