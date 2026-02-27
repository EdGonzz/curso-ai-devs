import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Trophy,
  Newspaper,
  ShoppingBag,
  Ticket,
  Users,
  ArrowRight,
  Play,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Platzi FC — El Club del Futuro",
  description:
    "Sitio oficial del Platzi FC. Noticias, partidos, equipo, entradas y tienda.",
};

function HeroSection() {
  return (
    <section className="relative bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="default" className="mb-4 bg-secondary text-primary-dark font-semibold">
              Próximo Partido
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
              Platzi FC vs Real Ejemplo
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Sábado 8 de Marzo · 20:00h · Estadio Platzi Arena
            </p>
            <p className="mt-2 text-white/50">
              Liga Nacional · Jornada 24
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/entradas">
                <Button variant="secondary" size="lg">
                  <Ticket className="mr-2 h-5 w-5" />
                  Comprar Entradas
                </Button>
              </Link>
              <Link href="/partidos">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Ver Calendario
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex lg:justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-white/5 border border-white/10">
              <div className="text-center">
                <div className="text-6xl font-bold text-secondary">PFC</div>
                <div className="mt-2 text-sm text-white/50">vs</div>
                <div className="mt-1 text-2xl font-bold text-white/80">REJ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecentResults() {
  const results = [
    { home: "Platzi FC", away: "Deportivo Sur", homeScore: 3, awayScore: 1, competition: "Liga Nacional", date: "Mar 1" },
    { home: "FC Norte", away: "Platzi FC", homeScore: 0, awayScore: 2, competition: "Copa Nacional", date: "Feb 25" },
    { home: "Platzi FC", away: "Atlético Centro", homeScore: 1, awayScore: 1, competition: "Liga Nacional", date: "Feb 18" },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Resultados Recientes</h2>
          <Link href="/partidos?view=results" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {results.map((match, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <p className="text-xs text-muted mb-3">{match.competition} · {match.date}</p>
                <div className="flex items-center">
                  <span className={`flex-1 truncate text-right text-sm font-medium ${match.home === "Platzi FC" ? "text-primary font-bold" : ""}`}>
                    {match.home}
                  </span>
                  <div className="flex items-center gap-2 rounded-md bg-surface-alt px-3 py-1 mx-3 shrink-0">
                    <span className="text-lg font-bold">{match.homeScore}</span>
                    <span className="text-muted">-</span>
                    <span className="text-lg font-bold">{match.awayScore}</span>
                  </div>
                  <span className={`flex-1 truncate text-sm font-medium ${match.away === "Platzi FC" ? "text-primary font-bold" : ""}`}>
                    {match.away}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedNews() {
  const news = [
    { title: "Platzi FC golea y se afianza en la cima", excerpt: "Con un contundente 3-1, el equipo verde sumó tres puntos vitales.", date: "1 Mar 2026", category: "Equipo" },
    { title: "Renovación de contrato: estrella asegurada", excerpt: "El club confirmó la extensión del contrato de su máxima figura.", date: "28 Feb 2026", category: "Club" },
    { title: "Cantera produce nueva joya", excerpt: "El juvenil de 17 años debutó con gol en su primer partido oficial.", date: "26 Feb 2026", category: "Academia" },
    { title: "Nueva colección de la tienda oficial", excerpt: "Descubre los diseños exclusivos de la temporada 2025-2026.", date: "24 Feb 2026", category: "Tienda" },
  ];

  return (
    <section className="bg-surface-alt py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Noticias Destacadas</h2>
          <Link href="/noticias" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            Ver todas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {news.map((article, i) => (
            <Card key={i} className="group overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video bg-primary/5 flex items-center justify-center">
                <Newspaper className="h-10 w-10 text-primary/20" />
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline">{article.category}</Badge>
                  <span className="text-xs text-muted">{article.date}</span>
                </div>
                <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-foreground-secondary line-clamp-2">{article.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function StandingsPreview() {
  const standings = [
    { pos: 1, team: "Platzi FC", pts: 58, played: 23, diff: "+28" },
    { pos: 2, team: "Real Ejemplo", pts: 55, played: 23, diff: "+22" },
    { pos: 3, team: "Deportivo Sur", pts: 50, played: 23, diff: "+15" },
    { pos: 4, team: "Atlético Centro", pts: 47, played: 23, diff: "+12" },
    { pos: 5, team: "FC Norte", pts: 44, played: 23, diff: "+8" },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Clasificación</h2>
          <Link href="/competicion" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            Tabla completa <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Card>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left font-medium text-muted" scope="col">#</th>
                  <th className="px-4 py-3 text-left font-medium text-muted" scope="col">Equipo</th>
                  <th className="px-4 py-3 text-center font-medium text-muted" scope="col">PJ</th>
                  <th className="px-4 py-3 text-center font-medium text-muted" scope="col">DG</th>
                  <th className="px-4 py-3 text-center font-medium text-muted" scope="col">Pts</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((row) => (
                  <tr
                    key={row.pos}
                    className={`border-b border-border last:border-0 ${row.team === "Platzi FC" ? "bg-accent" : ""}`}
                  >
                    <td className="px-4 py-3 font-medium">{row.pos}</td>
                    <td className={`px-4 py-3 ${row.team === "Platzi FC" ? "font-bold text-primary" : ""}`}>
                      {row.team}
                    </td>
                    <td className="px-4 py-3 text-center text-muted">{row.played}</td>
                    <td className="px-4 py-3 text-center text-muted">{row.diff}</td>
                    <td className="px-4 py-3 text-center font-bold">{row.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function QuickLinks() {
  const links = [
    { icon: Calendar, label: "Partidos", href: "/partidos", desc: "Calendario y resultados" },
    { icon: Users, label: "Equipo", href: "/equipo", desc: "Plantilla y cuerpo técnico" },
    { icon: Trophy, label: "Competición", href: "/competicion", desc: "Tablas y estadísticas" },
    { icon: Ticket, label: "Entradas", href: "/entradas", desc: "Compra tus tickets" },
    { icon: ShoppingBag, label: "Tienda", href: "/tienda", desc: "Productos oficiales" },
    { icon: Play, label: "Media", href: "/media/videos", desc: "Videos y galerías" },
  ];

  return (
    <section className="bg-primary text-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Explora Platzi FC</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
            >
              <item.icon className="h-8 w-8 text-secondary" />
              <div>
                <div className="font-semibold">{item.label}</div>
                <div className="mt-1 text-xs text-white/50">{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SponsorsBar() {
  const sponsors = ["Sponsor Oro 1", "Sponsor Oro 2", "Sponsor Plata 1", "Sponsor Plata 2", "Sponsor Plata 3"];

  return (
    <section className="py-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-muted mb-6">
          Patrocinadores Oficiales
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {sponsors.map((name) => (
            <div
              key={name}
              className="flex h-12 w-32 items-center justify-center rounded-md bg-surface-alt text-xs font-medium text-muted"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RecentResults />
      <FeaturedNews />
      <StandingsPreview />
      <QuickLinks />
      <SponsorsBar />
    </>
  );
}
