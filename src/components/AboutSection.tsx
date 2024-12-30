import { Card, CardContent } from "./ui/card";

export default function AboutSection() {
  return (
    <div>
        <section className="py-16">
        <div className="container mx-auto px-4">
            <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Test section</h2>
                <p className="text-gray-600">
                Test section
                </p>
            </CardContent>
            </Card>
        </div>
        </section>
    </div>
  );
}

