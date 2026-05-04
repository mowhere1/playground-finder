export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Playground Finder</h1>
      <p>Find nearby playgrounds with toilets, coffee and kid-friendly features.</p>

      <h2>Nearby Playgrounds</h2>

      <div style={{ border: "1px solid #ccc", padding: 15, marginBottom: 10 }}>
        <h3>Bonython Park Playground</h3>
        <p>Distance: 1.8 km</p>
        <p>Rating: 4.6 ⭐</p>
        <p>Age: Toddlers to 10 yrs</p>
        <p>Toilets: Yes</p>
        <p>Coffee: 350m away</p>
        <p>Pet Friendly: Yes</p>
      </div>
    </main>
  );
}
