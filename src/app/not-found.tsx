import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <PageHero title="Page not found" subtitle="The page you are looking for does not exist or has moved.">
      <Button href="/" variant="primary">
        GO TO HOME
      </Button>
    </PageHero>
  );
}
