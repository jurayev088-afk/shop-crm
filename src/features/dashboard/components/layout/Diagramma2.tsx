import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';

// 1. Rasmdagiga o'xshash tartibsiz baland-past ma'lumotlar
const mockData = [
  { val: 80 }, { val: 45 }, { val: 65 }, { val: 20 }, { val: 75 }, 
  { val: 60 }, { val: 35 }, { val: 85 }, { val: 15 }, { val: 40 }, 
  { val: 55 }, { val: 25 }, { val: 70 }, { val: 10 }, { val: 48 }, 
];

export const MyRoundedDiagram = () => {
  return (
    <div className="w-full h-24 p-2 rounded-xl">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={mockData} barGap={2} barCategoryGap="20%">
            <Tooltip 
                cursor={false}
            contentStyle={{
                background:'#1f2937',
                borderRadius:'8px',
                color:'#fff',
                border:'none',
                padding:'4px 8px',
                fontSize:'12px'
            }}
            itemStyle={{color:'#4daa73'}}
            />
          <Bar 
            dataKey="val" 
            fill="#4daa73" 
            radius={[2, 2, 2, 2]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};