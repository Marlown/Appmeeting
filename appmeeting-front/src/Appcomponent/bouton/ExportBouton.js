import React from 'react';

function ExportBouton(props) {
  const downloadCSV = () => {
    fetch('https://graph.microsoft.com/v1.0/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location', {
      headers: {
        'Authorization': 'Bearer [eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFuZ3hMZjdaNkZlMENfZlBLYmctQWx2cnd0cnhVYmlaUjYyVnNncXR6dmciLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80MjRiNTZmNC1jOWQ3LTQ1NGEtYTAzNC0zM2NiOGRkMzRlYWQvIiwiaWF0IjoxNjk1OTc3OTU4LCJuYmYiOjE2OTU5Nzc5NTgsImV4cCI6MTY5NjA2NDY1OCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhVQUFBQVQyQVpRT0xGcGwwamV3ZHV6NUpZaHlHTmxhUG9ROTVJY2JKNkIwWFN3TmtkWXNOWnNJSkFBbzJ1NTNhYmFMSFUiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IllBTyIsImdpdmVuX25hbWUiOiJNYXJpZSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjJhMDE6ZTBhOjI3ZDpiMDUwOmJkNGY6YjlkYTo0MDVhOmNkZGYiLCJuYW1lIjoiTWFyaWUgWUFPIiwib2lkIjoiNjY3ODk1N2UtODNiNC00ZWZiLWE5ZGYtNmYzYTM5OWYxYzE1IiwicGxhdGYiOiI1IiwicHVpZCI6IjEwMDMyMDAyNDA1OUJFOTgiLCJyaCI6IjAuQVhvQTlGWkxRdGZKU2tXZ05EUExqZE5PclFNQUFBQUFBQUFBd0FBQUFBQUFBQUI2QUN3LiIsInNjcCI6IkNhbGVuZGFycy5SZWFkIENhbGVuZGFycy5SZWFkLlNoYXJlZCBDYWxlbmRhcnMuUmVhZEJhc2ljIENhbGVuZGFycy5SZWFkV3JpdGUgb3BlbmlkIHByb2ZpbGUgVXNlci5SZWFkIFVzZXIuUmVhZEJhc2ljLkFsbCBlbWFpbCBVc2VyLlJlYWRXcml0ZSIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImtLUi1pWGc4aUlnQ0RCZldSZ29JTHN2UnJoQndWZFdTNDFqMm0zSDZPYlEiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiRVUiLCJ0aWQiOiI0MjRiNTZmNC1jOWQ3LTQ1NGEtYTAzNC0zM2NiOGRkMzRlYWQiLCJ1bmlxdWVfbmFtZSI6Im15YW9AbGEtcG1uLm9yZyIsInVwbiI6Im15YW9AbGEtcG1uLm9yZyIsInV0aSI6IjdvSmlvcXZINUVpMzV2TVdFcGRLQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfY2MiOlsiQ1AxIl0sInhtc19zc20iOiIxIiwieG1zX3N0Ijp7InN1YiI6IkR0Wl9xNWFtVXVsWlFWTTJjb2RHLThqU2tzaGJzSG9BU191THN4OTRaT1kifSwieG1zX3RjZHQiOjE2MDgxNDE0NzUsInhtc190ZGJyIjoiRVUifQ.nauqqAaF1E1OFWo7RK_OepdbK9LzsoiRQj8BRLirj30fBj6UtVZzFqXHlpFbVwDnOW2cm8phLImgeN1mMhirP5guo5WCuJYKIelNMSbV6YGXekvAWJXgGEni47sJirR5xV0Oes6X6BjtwJuT9bhm_U6Lw7IPZnrXflvYVfiLB5jePmAoqQWPrThszrvv540UM9a9nf8NlR62of5ag9KTyqtcYwgdFhmtxlSlUwi8xuH4u8ggHL51XBljKyrWhAy0Zmu6y7WyStdzx4hAEjNlcTBm6L6QiHMjr2tPy6lCLJt4kXVR4GEPUsJx0IhFpXkIFbDq9qLJEqgSM-ysDDig2w]', // Remplacez par votre propre token d'accès
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'meetings.csv';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error('Erreur lors de la récupération du fichier CSV :', error));
  };

  return (
    <button onClick={downloadCSV}>Exporter des données en CSV</button>
  );
}


export default ExportBouton;

