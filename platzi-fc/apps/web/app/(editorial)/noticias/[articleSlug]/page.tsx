import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowLeft } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ articleSlug: string }>;
}): Promise<Metadata> {
  const { articleSlug } = await params;
  return { title: `Noticia: ${articleSlug}`, description: `Lee la noticia completa.` };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ articleSlug: string }>;
}) {
  await params;

  return (
    <article className="py-8">
      <Link href="/noticias" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
        <ArrowLeft className="h-4 w-4" /> Volver a noticias
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="default">Equipo</Badge>
          <span className="flex items-center gap-1 text-sm text-muted">
            <Clock className="h-3.5 w-3.5" /> 1 Mar 2026
          </span>
        </div>
        <h1 className="text-3xl font-bold lg:text-4xl">Platzi FC golea y se afianza en la cima</h1>
        <p className="mt-3 text-lg text-foreground-secondary">
          Con un contundente 3-1 ante Deportivo Sur, el equipo verde sumó tres puntos vitales
          y se consolida como líder de la Liga Nacional.
        </p>
      </header>

      <div className="aspect-video rounded-xl bg-primary/5 flex items-center justify-center mb-8">
        <span className="text-muted text-sm">Imagen destacada del artículo</span>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-foreground-secondary leading-relaxed mb-4">
          El Platzi FC demostró una vez más su poderío en casa al golear 3-1 al Deportivo Sur
          en un emocionante encuentro disputado en el Estadio Platzi Arena ante más de 32,000
          aficionados que no pararon de animar al equipo durante los 90 minutos.
        </p>
        <p className="text-foreground-secondary leading-relaxed mb-4">
          El capitán del equipo abrió el marcador al minuto 15 con un potente disparo desde
          fuera del área que sorprendió al portero visitante. Los verdes siguieron presionando
          y lograron ampliar la ventaja al 38&apos; con una jugada colectiva que terminó en un
          centro perfecto rematado de cabeza.
        </p>
        <p className="text-foreground-secondary leading-relaxed mb-4">
          En la segunda mitad, el Deportivo Sur intentó reaccionar y logró descontar al
          minuto 62, pero la respuesta del Platzi FC fue contundente. Al 78&apos;, el delantero
          estrella Sebastián Rojas anotó su gol número 14 de la temporada con una brillante
          jugada individual que dejó a todo el estadio de pie.
        </p>
        <p className="text-foreground-secondary leading-relaxed">
          Con esta victoria, el Platzi FC suma 58 puntos y se mantiene en lo más alto de la
          tabla de clasificación, tres puntos por encima del Real Ejemplo. El próximo desafío
          será el derbi ante el Real Ejemplo el próximo sábado.
        </p>
      </div>

      <Card className="mt-8">
        <CardContent className="p-6">
          <h2 className="font-semibold mb-2">Artículos relacionados</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/noticias/renovacion-estrella" className="text-sm text-primary hover:underline">
                Renovación de contrato: estrella asegurada
              </Link>
            </li>
            <li>
              <Link href="/noticias/victoria-copa" className="text-sm text-primary hover:underline">
                Victoria épica en Copa Nacional
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </article>
  );
}
