import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Chip,
  Divider,
} from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import CopyRight from '../../Components/CopyRight/CopyRight';

// ─── Data ────────────────────────────────────────────────────────────────────

const techStack = [
  {
    emoji: '🍃',
    name: 'MongoDB',
    color: '#4DB33D',
    description: 'NoSQL database used to store product, user, cart and order data in flexible JSON-like documents.',
  },
  {
    emoji: '⚡',
    name: 'Express.js',
    color: '#000000',
    description: 'Minimal Node.js web framework powering the REST API, middleware pipeline, and route handling.',
  },
  {
    emoji: '⚛️',
    name: 'React.js',
    color: '#61DAFB',
    description: 'Component-based UI library delivering a fast, interactive storefront with seamless navigation.',
  },
  {
    emoji: '🟢',
    name: 'Node.js',
    color: '#339933',
    description: 'JavaScript runtime environment that executes the server-side logic and connects every layer of the stack.',
  },
];

const stats = [
  { value: '118+', label: 'Products' },
  { value: '8', label: 'Categories' },
  { value: '100%', label: 'Secure' },
  { value: 'MERN', label: 'Stack' },
];

// ─── Component ───────────────────────────────────────────────────────────────

const About = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f7fa', pb: 6 }}>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #312e81 100%)',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-40%',
            right: '-10%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-30%',
            left: '-5%',
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Chip
            label="MERN Stack Project"
            sx={{
              mb: 3,
              backgroundColor: 'rgba(255,255,255,0.15)',
              color: '#fff',
              fontWeight: 700,
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.25)',
            }}
          />
          <Typography
            variant="h2"
            fontWeight={800}
            color="#fff"
            sx={{ fontSize: { xs: '2.2rem', md: '3.5rem' }, letterSpacing: '-0.5px' }}
          >
            About ShopIt
          </Typography>
          <Typography
            variant="h6"
            color="rgba(255,255,255,0.8)"
            sx={{ mt: 2, maxWidth: 560, mx: 'auto', fontWeight: 400, lineHeight: 1.7 }}
          >
            A full-stack e-commerce experience built with passion, precision, and the MERN stack.
          </Typography>
        </Container>
      </Box>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <Container maxWidth="lg" sx={{ mt: { xs: -4, md: -5 }, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={2}>
          {stats.map((s) => (
            <Grid item xs={6} md={3} key={s.label}>
              <Paper
                elevation={6}
                sx={{
                  py: 4,
                  textAlign: 'center',
                  borderRadius: 3,
                  background: '#fff',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-4px)' },
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight={900}
                  sx={{
                    background: 'linear-gradient(135deg, #1976d2, #312e81)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2rem', md: '2.8rem' },
                  }}
                >
                  {s.value}
                </Typography>
                <Typography variant="subtitle1" fontWeight={600} color="text.secondary" sx={{ mt: 0.5 }}>
                  {s.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ── Our Story ─────────────────────────────────────────────────────── */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Typography variant="overline" color="primary" fontWeight={700} display="block" textAlign="center">
          Our Story
        </Typography>
        <Typography
          variant="h4"
          fontWeight={800}
          textAlign="center"
          sx={{ mt: 1, mb: 3, color: '#1a1a2e' }}
        >
          Built with purpose
        </Typography>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            background: 'linear-gradient(135deg, #f0f4ff 0%, #fafaff 100%)',
            border: '1px solid #e0e7ff',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.9, fontWeight: 400 }}>
            ShopIt was built as an internship project to demonstrate full-stack MERN development skills.
            It features real products, secure authentication, and a seamless shopping experience.
            From browsing categories to managing a wishlist and completing checkout — every feature was
            crafted to reflect industry best practices in modern web development.
          </Typography>
        </Paper>
      </Container>

      {/* ── Tech Stack ────────────────────────────────────────────────────── */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography variant="overline" color="primary" fontWeight={700} display="block" textAlign="center">
          Technology
        </Typography>
        <Typography variant="h4" fontWeight={800} textAlign="center" sx={{ mt: 1, mb: 4, color: '#1a1a2e' }}>
          Tech Stack
        </Typography>
        <Grid container spacing={3}>
          {techStack.map((tech) => (
            <Grid item xs={12} sm={6} md={3} key={tech.name}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.25s ease',
                  border: '1px solid transparent',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 40px rgba(25,118,210,0.15)',
                    borderColor: '#1976d2',
                  },
                }}
              >
                <Typography sx={{ fontSize: '3rem', mb: 1.5 }}>{tech.emoji}</Typography>
                <Typography variant="h6" fontWeight={800} sx={{ color: '#1a1a2e', mb: 1 }}>
                  {tech.name}
                </Typography>
                <Divider sx={{ width: 40, borderColor: tech.color, borderWidth: 2, mb: 1.5 }} />
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {tech.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ── Developer Card ────────────────────────────────────────────────── */}
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Typography variant="overline" color="primary" fontWeight={700} display="block" textAlign="center">
          The Developer
        </Typography>
        <Typography variant="h4" fontWeight={800} textAlign="center" sx={{ mt: 1, mb: 4, color: '#1a1a2e' }}>
          Meet the Builder
        </Typography>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 5,
            textAlign: 'center',
            background: 'linear-gradient(145deg, #ffffff, #f0f4ff)',
            border: '1px solid #e0e7ff',
          }}
        >
          {/* Gradient Avatar */}
          <Box
            sx={{
              width: 110,
              height: 110,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1976d2 0%, #312e81 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 2.5,
              boxShadow: '0 8px 30px rgba(25,118,210,0.35)',
            }}
          >
            <Typography sx={{ fontSize: '2.8rem' }}>👨‍💻</Typography>
          </Box>

          <Typography variant="h5" fontWeight={800} sx={{ color: '#1a1a2e' }}>
            Yug Thakral
          </Typography>
          <Chip
            label="Full Stack Developer Intern"
            size="small"
            sx={{
              mt: 1,
              mb: 3,
              background: 'linear-gradient(135deg, #1976d2, #312e81)',
              color: '#fff',
              fontWeight: 600,
            }}
          />

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
            Passionate about building scalable, user-friendly web applications. Skilled in the MERN stack
            with a focus on clean code, intuitive design, and delightful user experiences.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Box
              component="a"
              href="https://github.com/Yug912"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1.2,
                borderRadius: 3,
                background: '#1a1a2e',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
                '&:hover': { opacity: 0.85 },
              }}
            >
              <FaGithub size={16} />
              GitHub
            </Box>
            <Box
              component="a"
              href="https://www.linkedin.com/in/yug-thakral"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1.2,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #1976d2, #312e81)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
                '&:hover': { opacity: 0.85 },
              }}
            >
              <FaLinkedin size={16} />
              LinkedIn
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <Box sx={{ mt: 8 }}>
        <CopyRight />
      </Box>
    </Box>
  );
};

export default About;
