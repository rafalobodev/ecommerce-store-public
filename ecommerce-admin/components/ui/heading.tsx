"use client"
import { useState, useEffect } from 'react';

interface HeadingProps {
    title: string;
    description: string;
  }
  
  export const Heading: React.FC<HeadingProps> = ({
    title,
    description
  }) => {

    const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Definir o estado para true no cliente após a montagem
    setIsClient(true);
  }, []);

    return isClient ? ( 
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    ): null;
  };
   