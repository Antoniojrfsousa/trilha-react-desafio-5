import axios from 'axios';



export const api  = axios.create({
    baseURL: 'https://fmurophcxmullwjlqqhy.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtdXJvcGhjeG11bGx3amxxcWh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2Mjg2MDIsImV4cCI6MjA0MTIwNDYwMn0.21Q67xtNCqmOjW9htmxjXBgMDzIwKuMw8ucOLOzVbo8",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtdXJvcGhjeG11bGx3amxxcWh5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTYyODYwMiwiZXhwIjoyMDQxMjA0NjAyfQ.Ba54stKmTEPKQATCL71R3znG5Xoh7mbccXFFqpaPNLM"
    }
});


