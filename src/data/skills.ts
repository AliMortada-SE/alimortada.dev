import {
  FaNetworkWired,
  FaReact,
  FaServer,
  FaDatabase,
  FaLock,
  FaGitAlt
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiSocketdotio,
  SiLinux
} from 'react-icons/si';
import type { Skill } from '../types';

export const skills: Skill[] = [
  {
    name: 'Network Programming',
    icon: FaNetworkWired,
    description: 'WebSockets, TCP/IP, real-time systems, low-latency communication',
    proficiency: 95,
    category: 'Networking'
  },
  {
    name: 'C++ Development',
    icon: SiCplusplus,
    description: 'High-performance systems, memory management, STL, modern C++17/20',
    proficiency: 98,
    category: 'Programming'
  },
  {
    name: 'WebSocket Protocol',
    icon: SiSocketdotio,
    description: 'Real-time bidirectional communication, custom protocols, socket.io',
    proficiency: 92,
    category: 'Networking'
  },
  {
    name: 'React.js',
    icon: FaReact,
    description: 'Modern React, hooks, TypeScript, state management, performance optimization',
    proficiency: 90,
    category: 'Web Development'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    description: 'Type-safe development, interfaces, generics, advanced types',
    proficiency: 88,
    category: 'Programming'
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    description: 'Backend services, REST APIs, Express, async programming',
    proficiency: 87,
    category: 'Web Development'
  },
  {
    name: 'System Architecture',
    icon: FaServer,
    description: 'Distributed systems, microservices, scalable architectures',
    proficiency: 85,
    category: 'System Design'
  },
  {
    name: 'Database Design',
    icon: FaDatabase,
    description: 'SQL, NoSQL, optimization, indexing, query performance',
    proficiency: 82,
    category: 'System Design'
  },
  {
    name: 'Network Security',
    icon: FaLock,
    description: 'Encryption, authentication, secure protocols, vulnerability assessment',
    proficiency: 80,
    category: 'Networking'
  },
  {
    name: 'Linux Systems',
    icon: SiLinux,
    description: 'System administration, shell scripting, performance tuning',
    proficiency: 85,
    category: 'System Design'
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    description: 'ES6+, async/await, functional programming, DOM manipulation',
    proficiency: 92,
    category: 'Programming'
  },
  {
    name: 'DevOps & Tools',
    icon: FaGitAlt,
    description: 'Git, Docker, CI/CD, automation, deployment pipelines',
    proficiency: 78,
    category: 'System Design'
  }
];
