"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Trash2, Info } from 'lucide-react';
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface TeamMember {
  name: string;
  role: string;
  email: string;
  expertise: string;
}

const SignupFormDemo = () => {
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([{ name: "", role: "", email: "", expertise: "" }]);
  const [projectIdea, setProjectIdea] = useState("");

  const handleAddMember = () => {
    setTeamMembers([...teamMembers, { name: "", role: "", email: "", expertise: "" }]);
  };

  const handleRemoveMember = (index: number) => {
    const newTeamMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(newTeamMembers);
  };

  const handleMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index][field] = value;
    setTeamMembers(newTeamMembers);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      teamName,
      teamMembers,
      projectIdea
    };
    console.log('Form Data:', formData);
  };

  return (
    <div className="mt-5 max-w-6xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
   

      <Accordion type="single" collapsible className="mb-6">
        <AccordionItem value="registration-guidelines">
          <AccordionTrigger>
            <div className="flex items-center">
              <Info className="mr-2 h-5 w-5" />
              Registration Guidelines
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-300">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">How to Form a Team and Register:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Form a team of 2-5 members with diverse skills.</li>
                <li>Choose a unique team name.</li>
                <li>Designate roles for each team member (e.g., Developer, Designer, Project Manager).</li>
                <li>Prepare a brief project idea description.</li>
                <li>Fill out the registration form below with all required information.</li>
              </ul>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Deadlines and Requirements:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Registration Deadline: July 15, 2025, 11:59 PM EST</li>
                <li>All team members must be at least 18 years old.</li>
                <li>Each team must have at least one member with coding experience.</li>
                <li>Project ideas should align with the theme: "AI for Social Good"</li>
                <li>Teams must be available for the entire hackathon duration: August 1-3, 2024</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="teamName">Team Name</Label>
          <Input
            id="teamName"
            placeholder="Awesome Team"
            type="text"
            required
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </LabelInputContainer>

        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-4">Team Members Information</h3>
          {teamMembers.map((member, index) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Team Member {index + 1}</h4>
                {teamMembers.length > 1 && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => handleRemoveMember(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <LabelInputContainer>
                <Label htmlFor={`name-${index}`}>Name</Label>
                <Input
                  id={`name-${index}`}
                  placeholder="John Doe"
                  type="text"
                  required
                  value={member.name}
                  onChange={(e) => handleMemberChange(index, "name", e.target.value)}
                />
              </LabelInputContainer>
              <LabelInputContainer className="mt-4">
                <Label htmlFor={`role-${index}`}>Role</Label>
                <Input
                  id={`role-${index}`}
                  placeholder="Developer"
                  type="text"
                  required
                  value={member.role}
                  onChange={(e) => handleMemberChange(index, "role", e.target.value)}
                />
              </LabelInputContainer>
              <LabelInputContainer className="mt-4">
                <Label htmlFor={`email-${index}`}>Email</Label>
                <Input
                  id={`email-${index}`}
                  placeholder="john@example.com"
                  type="email"
                  required
                  value={member.email}
                  onChange={(e) => handleMemberChange(index, "email", e.target.value)}
                />
              </LabelInputContainer>
              <LabelInputContainer className="mt-4">
                <Label htmlFor={`expertise-${index}`}>Expertise</Label>
                <Input
                  id={`expertise-${index}`}
                  placeholder="React, Node.js"
                  type="text"
                  required
                  value={member.expertise}
                  onChange={(e) => handleMemberChange(index, "expertise", e.target.value)}
                />
              </LabelInputContainer>
            </div>
          ))}
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleAddMember} 
            className="mt-2"
            disabled={teamMembers.length >= 5}
          >
            <PlusCircle className="mr-2 h-4 w-4" /> Add Team Member
          </Button>
          {teamMembers.length >= 5 && (
            <p className="text-sm text-red-500 mt-2">Maximum team size reached (5 members).</p>
          )}
        </div>

        <LabelInputContainer className="mt-6">
          <Label htmlFor="projectIdea">Project Ideas (Theme: AI for Social Good)</Label>
          <Textarea
            id="projectIdea"
            placeholder="Describe your project idea that aligns with the theme 'AI for Social Good'..."
            rows={6}
            required
            value={projectIdea}
            onChange={(e) => setProjectIdea(e.target.value)}
            className="resize-none"
          />
        </LabelInputContainer>

        <Button className="w-full mt-6" type="submit">
          Register Team
          <BottomGradient />
        </Button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SignupFormDemo;
