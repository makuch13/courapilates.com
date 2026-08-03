import Link from "next/link";
import { Section, Container } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section theme="light">
      <Container className="text-center">
        <h1 className="u-h2">Page not found.</h1>
        <p className="mt-4" style={{ color: "var(--on-soft)" }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <Link href="/" className="mt-8 inline-block underline underline-offset-4">
          Back to the studio
        </Link>
      </Container>
    </Section>
  );
}
