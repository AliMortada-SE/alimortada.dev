import {
  FaDatabase,
  FaGlobe,
  FaLock,
  FaNetworkWired,
  FaTerminal
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiC,
  SiGo,
  SiArchlinux,
} from 'react-icons/si';
import type { Skill } from '../types';

export const skills: Skill[] = [
  {
    name: 'C++',
    icon: SiCplusplus,
    description: 'MultiThreading, Encryption, Networking, Binary level Control ,RTS ,Servers (C++17/20)',
    proficiency: 95,
    category: 'Programming'
  },
  {
    name: 'C',
    icon: SiC,
    description: 'POSIX APIs, Memory management, IPC, Process control, Low-level system programming, Kernel Programming(Basic).',
    proficiency: 82,
    category: 'Programming'
  },
  {
    name: 'Go',
    icon: SiGo,
    description: 'Concurrent services, Network tools, Backend services, High-performance servers.',
    proficiency: 76,
    category: 'Networking'
  },
  {
    name: 'Linux',
    icon: SiArchlinux,
    description: 'epoll, File descriptors, Processes, fork/exec , IPC, System calls, Resource management (Arch Linux)',
    proficiency: 92,
    category: 'Web Development'
  },
  {
    name: 'DevOps',
    icon: FaTerminal,
    description: 'Linux server management, SSH-based remote control, TCP/WebSocket networking & deployment',
    proficiency: 88,
    category: 'Programming'
  },
  {
    name: 'Networking',
    icon: FaNetworkWired,
    description: 'TCP/IP, WebSocket (from scratch), Event-driven servers, Encrypted communication.',
    proficiency: 86,
    category: 'Web Development'
  },
  {
    name: 'Encryption',
    icon: FaLock,
    description: 'Custom encryption algorithms, Secure protocols, Encrypted databases, Binary-safe design (Basics in Reverse Engineering)',
    proficiency: 83,
    category: 'System Design'
  },
  {
    name: 'Database Design',
    icon: FaDatabase,
    description: 'Database engines from scratch, Fully encrypted storage, Performance-oriented design.',
    proficiency: 80,
    category: 'System Design'
  },
  {
    name: 'Web Development',
    icon: FaGlobe,
    description: 'System dashboards, Control panels, HTML, CSS, Minimal JavaScript.',
    proficiency: 70,
    category: 'Web Development'
  },
  
];
