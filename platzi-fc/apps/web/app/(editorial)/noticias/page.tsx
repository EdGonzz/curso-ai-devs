import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper } from "lucide-react";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Últimas noticias del Platzi FC.",
};

const mockArticles = [
  { slug: "platzi-fc-golea", title: "Platzi FC golea y se afianza en la cima", excerpt: "Con un contundente 3-1, el equipo verde sumó tres puntos vitales.", date: "1 Mar 2026", category: "Equipo", featured: true },
  { slug: "renovacion-estrella", title: "Renovación de contrato: estrella asegurada", excerpt: "El club confirmó la extensión del contrato de su máxima figura hasta 2029.", date: "28 Feb 2026", category: "Club", featured: false },
  { slug: "cantera-nueva-joya", title: "Cantera produce nueva joya", excerpt: "El juvenil de 17 años debutó con gol en su primer partido oficial.", date: "26 Feb 2026", category: "Academia", featured: false },
  { slug: "nueva-coleccion-tienda", title: "Nueva colección de la tienda oficial", excerpt: "Descubre los diseños exclusivos de la temporada 2025-2026.", date: "24 Feb 2026", category: "Tienda", featured: false },
  { slug: "victoria-copa", title: "Victoria épica en Copa Nacional", excerpt: "Platzi FC avanza a cuartos de final con un gol en el último minuto.", date: "22 Feb 2026", category: "Equipo", featured: false },
  { slug: "fundacion-inaugura", title: "La Fundación inaugura nuevo programa social", excerpt: "El club expande su impacto social con un nuevo programa educativo.", date: "20 Feb 2026", category: "Comunidad", featured: false },
];

export default function NoticiasPage() {
  const featured = mockArticles.find((a) => a.featured);
  const rest = mockArticles.filter((a) => !a.featured);

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Noticias</h1>

      {featured && (
        <Link href={`/noticias/${featured.slug}`} className="block mb-8">
          <Card className="group overflow-hidden hover:shadow-lg transition-shadow md:flex">
            <div className="aspect-video md:aspect-auto md:w-1/2 bg-primary/5 flex items-center justify-center">
              <Newspaper className="h-16 w-16 text-primary/20" />
            </div>
            <div className="flex-1 p-6">
              <Badge variant="default" className="mb-2">{featured.category}</Badge>
              <h2 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">{featured.title}</h2>
              <p className="text-foreground-secondary mb-3">{featured.excerpt}</p>
              <span className="text-sm text-muted">{featured.date}</span>
            </div>
          </Card>
        </Link>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((article) => (
          <Link key={article.slug} href={`/noticias/${article.slug}`}>
            <Card className="group overflow-hidden hover:shadow-md transition-shadow h-full">
              <div className="aspect-video bg-primary/5 flex items-center justify-center">
                <Newspaper className="h-10 w-10 text-primary/20" />
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline">{article.category}</Badge>
                  <span className="text-xs text-muted">{article.date}</span>
                </div>
                <CardTitle className="text-base group-hover:text-primary transition-colors">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-foreground-secondary line-clamp-2">{article.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
