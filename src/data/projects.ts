import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Orion Network System',
    description: 'High-performance network system built in C++ for real-time communication',
    longDescription: 'A sophisticated network system implementing custom protocols for low-latency, real-time communication. Features include connection pooling, efficient memory management, and scalable architecture.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    technologies: ['C++', 'WebSockets', 'TCP/IP', 'Linux', 'Multithreading'],
    github: 'https://github.com',
    featured: true
  },
  {
    id: '2',
    title: 'Real-Time Chat Application',
    description: 'WebSocket-based chat platform with end-to-end encryption',
    longDescription: 'A secure, real-time messaging platform featuring WebSocket connections, message encryption, user authentication, and a modern React interface.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'WebSocket', 'TypeScript', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true
  },
  {
    id: '3',
    title: 'Network Traffic Analyzer',
    description: 'Tool for analyzing and visualizing network traffic patterns',
    longDescription: 'A comprehensive network analysis tool that captures, processes, and visualizes network traffic in real-time. Features packet inspection, protocol analysis, and performance metrics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['C++', 'Python', 'Wireshark', 'Data Visualization'],
    github: 'https://github.com',
    featured: true
  },
  {
    id: '4',
    title: 'File Manager System',
    description: 'Advanced file management system with encryption and compression',
    longDescription: 'A robust file management system featuring file encryption, compression, metadata management, and a user-friendly interface.',
    image: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=800&h=600&fit=crop',
    technologies: ['C++', 'Qt', 'Encryption', 'File Systems'],
    github: 'https://github.com'
  },
  {
    id: '5',
    title: 'Portfolio Dashboard',
    description: 'Modern, interactive portfolio website with dark theme',
    longDescription: 'A professional portfolio website built with React and TypeScript, featuring smooth animations, responsive design, and modern UI/UX principles.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: '6',
    title: 'API Gateway Service',
    description: 'Scalable API gateway for microservices architecture',
    longDescription: 'A high-performance API gateway handling routing, load balancing, authentication, and rate limiting for microservices.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'Microservices'],
    github: 'https://github.com'
  }
];
