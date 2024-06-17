import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://uarfzdtwraubhsbxoqjb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcmZ6ZHR3cmF1YmhzYnhvcWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2ODUxOTMsImV4cCI6MjAzMzI2MTE5M30.4VVeHVItfuSWntijU-o4rHy9GcI-dM-4OxRKH4eQ4Bs'
const supabase = createClient(supabaseUrl, supabaseKey)


const { data, error } = await supabase
  .from('Members')
  .select();

console.log(data);