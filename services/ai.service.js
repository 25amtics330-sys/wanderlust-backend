import axios from 'axios';

export const getAIRecommendation = async (userPreferences, destinations) => {
  const prompt = `
    You are a travel expert AI. Based on the following user preferences:
    ${JSON.stringify(userPreferences)}
    
    And these available destinations:
    ${JSON.stringify(destinations.map(d => ({ name: d.name, category: d.category, avgBudget: d.avgBudget, tags: d.tags })))}
    
    Create a 5-day personalized travel itinerary. Return JSON with:
    {
      "title": "trip title",
      "recommendedDestinations": ["name1", "name2"],
      "days": [{ "day": 1, "activities": ["activity1"], "accommodation": "type", "estimatedCost": 2000 }],
      "tips": ["tip1", "tip2"]
    }
    Return ONLY valid JSON, no extra text.
  `;

  const response = await axios.post(
    'https://api.anthropic.com/v1/messages',
    {
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1500,
      messages: [{ role: 'user', content: prompt }]
    },
    {
      headers: {
        'x-api-key': process.env.CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json'
      }
    }
  );

  const text = response.data.content[0].text;
  return JSON.parse(text);
};