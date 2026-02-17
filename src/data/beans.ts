import type { Chain } from '../types';

export const chains: Chain[] = [
    {
        id: 'starbucks',
        name: 'Starbucks',
        logoColor: '#00704A',
        beans: [
            {
                id: 'sb-house',
                name: 'House Blend',
                description: 'ラテンアメリカ産の豆をブレンド。ナッツとココアのニュアンス、ローストのかすかな甘み、酸味とコクの調和が特徴です。スターバックスの看板商品。',
                roastLevel: 'Medium',
                tags: ['Latin America', 'Balanced', 'Cocoa', 'Nut'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-house.jpg'
            },
            {
                id: 'sb-pike',
                name: 'Pike Place® Roast',
                description: 'ラテンアメリカ産の豆を使用。滑らかでバランスの良い味わい、チョコレートやシナモン、ナッツの香ばしさが特徴です。',
                roastLevel: 'Medium',
                tags: ['Latin America', 'Smooth', 'Chocolate', 'Nut'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-pike.jpg'
            },
            {
                id: 'sb-verona',
                name: 'Caffè Verona®',
                description: 'ダークココアのような口当たりが特徴のダークロースト。ラテンアメリカとインドネシアの豆をブレンドした、スパイシーでダークな風味が魅力です。',
                roastLevel: 'Dark',
                tags: ['Multi-Region', 'Rich', 'Dark Cocoa', 'Spicy'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-verona.jpg'
            },
            {
                id: 'sb-espresso',
                name: 'Espresso Roast',
                description: '濃厚なコクとビターキャラメルのような甘みが広がる味わい。ミルクとの相性が良く、すべてのエスプレッソビバレッジの核となる一杯です。',
                roastLevel: 'Dark',
                tags: ['Multi-Region', 'Intense', 'Caramel'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-espresso.jpg'
            },
            {
                id: 'sb-sumatra',
                name: 'Sumatra',
                description: '大地を思わせる風味としっかりとしたコク。滑らかな口当たりとハーブのような余韻が特徴で、食事との相性も抜群です。',
                roastLevel: 'Dark',
                tags: ['Asia/Pacific', 'Earthy', 'Herbal'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-sumatra.jpg'
            },
            {
                id: 'sb-tokyo',
                name: 'TOKYO ROAST®',
                description: '地域への情熱を祝して作られた特別なブレンド。滑らかで深みがあり、生命力に満ちた味わいです。',
                roastLevel: 'Medium',
                tags: ['Multi-Region', 'Hearty'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-tokyo.jpg'
            },
            {
                id: 'sb-breakfast',
                name: 'Breakfast Blend',
                description: 'ラテンアメリカ産の豆で、軽やかで爽やかな酸味と明るく香り高い風味が特徴。朝食によく合う一杯です。',
                roastLevel: 'Light',
                tags: ['Latin America', 'Bright', 'Tangy'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-breakfast.jpg'
            },
            {
                id: 'sb-guatemala',
                name: 'Guatemala Antigua',
                description: 'ココアを思わせる上品な味わい。レモン、チョコレート、ソフトスパイスの複雑な層が楽しめる、洗練された一杯です。',
                roastLevel: 'Medium',
                tags: ['Latin America', 'Cocoa', 'Soft Spice'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-guatemala.jpg'
            },
            {
                id: 'sb-ethiopia',
                name: 'Ethiopia',
                description: 'フルーティーでフローラルな風味を持つミディアムロースト。ダークチョコレート、ペッパリースパイス、スイートシトラスの香りが特徴です。',
                roastLevel: 'Medium',
                tags: ['Africa', 'Citrus', 'Dark Cocoa', 'Floral'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-ethiopia.jpg'
            },
            {
                id: 'sb-colombia',
                name: 'Colombia',
                description: 'ナッツのような香ばしさと穏やかなコク。ジューシーでナッティー、ハーバルな後味が特徴で、食事との相性も良いです。',
                roastLevel: 'Medium',
                tags: ['Latin America', 'Nutty', 'Herbal'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-colombia.jpg'
            },
            {
                id: 'sb-italian',
                name: 'Italian Roast',
                description: '深煎りでスモーキーな香りと力強い苦味が特徴。ローストの甘みと力強い風味が楽しめます。',
                roastLevel: 'Dark',
                tags: ['Multi-Region', 'Bold', 'Roasty'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-italian.jpg'
            },
            {
                id: 'sb-french',
                name: 'French Roast',
                description: '最も深い焙煎度合い。濃厚でスモーキー、独特の甘みを持つ力強い一杯です。',
                roastLevel: 'Dark',
                tags: ['Multi-Region', 'Smoky', 'Intense'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-french.jpg'
            },
            {
                id: 'sb-decaf',
                name: 'Decaf House Blend',
                description: 'ハウスブレンドと同じ素晴らしい味わいを、カフェインレスで。いつでも楽しめる一杯です。',
                roastLevel: 'Medium',
                tags: ['Decaf', 'Balanced'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-decaf.jpg'
            },
            {
                id: 'sb-lightnote',
                name: 'Lightnote Blend®',
                description: '最も浅煎りのブロンドロースト。軽やかで柔らかい口当たりと、トーストモルトとミルクチョコレートのほんのり甘みのある後味が特徴です。',
                roastLevel: 'Light',
                tags: ['Latin America', 'Mellow', 'Chocolate'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-lightnote.jpg'
            },
            {
                id: 'sb-kenya',
                name: 'Kenya',
                description: 'フローラルさやシトラス感、ベリーやスパイシーな味わいが特徴。明るく複雑なアフリカ産の豆です。',
                roastLevel: 'Medium',
                tags: ['Africa', 'Berry', 'Spicy', 'Floral'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-kenya.jpg'
            },
            {
                id: 'sb-komodo',
                name: 'Komodo Dragon Blend®',
                description: 'ハーブの風味とスパイシーな余韻が特徴のダークロースト。複雑で力強い味わいです。',
                roastLevel: 'Dark',
                tags: ['Asia/Pacific', 'Herbal', 'Spicy'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-komodo.jpg'
            },
            {
                id: 'sb-siren',
                name: 'Siren Blend',
                description: 'スターバックスのシンボルを冠したブレンド。バランスの取れた味わいが特徴です。',
                roastLevel: 'Medium',
                tags: ['Multi-Region', 'Balanced'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-siren.jpg'
            },
            {
                id: 'sb-iced',
                name: 'Iced Coffee Blend',
                description: '東アフリカ産とラテンアメリカ産の豆をブレンド。フルーティーで爽やかなシトラスの風味と程よいコクが特徴で、アイスコーヒー向けに作られています。',
                roastLevel: 'Medium',
                tags: ['Multi-Region', 'Fruity', 'Citrus', 'Iced'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-iced.jpg'
            },
            {
                id: 'sb-spring',
                name: 'Spring Season Blend',
                description: '春の訪れを祝う季節限定ブレンド。明るくフローラルな香りが特徴です。',
                roastLevel: 'Medium',
                tags: ['Seasonal', 'Floral', 'Bright'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-spring.jpg'
            },
            {
                id: 'sb-christmas',
                name: 'Christmas Blend',
                description: 'ホリデーシーズンの定番。スパイシーで甘く、ハーブとメープルの香りが特徴です。',
                roastLevel: 'Medium',
                tags: ['Seasonal', 'Spicy', 'Sweet'],
                weight: '250g',
                imageUrl: '/assets/beans/sb-christmas.jpg'
            }
        ]
    },
    {
        id: 'tullys',
        name: "Tully's Coffee",
        logoColor: '#A12239',
        beans: [
            {
                id: 'tc-house',
                name: 'House Blend',
                description: 'コロンビア、グアテマラ他が原産国。ほどよいボディとすっきりとした酸味、スムースな飲み口が特徴の定番商品です。',
                roastLevel: 'Medium',
                tags: ['Balanced', 'Signature'],
                weight: '200g',
                imageUrl: '/assets/beans/tc-house.jpg'
            },
            {
                id: 'tc-french',
                name: 'French Roast',
                description: '濃厚でスモーキー、カフェオレに最適。深いリッチさが特徴です。',
                roastLevel: 'Dark',
                tags: ['Smoky', 'Intense', 'Milk Friendly'],
                weight: '200g',
                imageUrl: '/assets/beans/tc-french.jpg'
            },
            {
                id: 'tc-mocha-java',
                name: 'Mocha Java',
                description: 'エチオピアモカとジャワ豆の古典的なブレンド。芳醇でエキゾチックな香りが特徴です。',
                roastLevel: 'Medium',
                tags: ['Exotic', 'Fragrant', 'Ethiopia', 'Indonesia'],
                weight: '200g',
                imageUrl: '/assets/beans/tc-mocha-java.jpg'
            },
            {
                id: 'tc-piccolo',
                name: 'Piccolo Bambino',
                description: '甘くマイルドで、優しい酸味が特徴。とても飲みやすい一杯です。',
                roastLevel: 'Light',
                tags: ['Mild', 'Sweet', 'Light'],
                weight: '200g',
                imageUrl: '/assets/beans/tc-piccolo.jpg'
            },
            {
                id: 'tc-black-three',
                name: 'Black Three',
                description: 'ブラックコーヒー愛好家のために作られた力強いブレンド。重厚なボディと甘みが特徴です。',
                roastLevel: 'Dark',
                tags: ['Heavy Body', 'Black Coffee'],
                weight: '200g',
                imageUrl: '/assets/beans/tc-black-three.jpg'
            },
            {
                id: 'tc-kilimanjaro',
                name: 'Kilimanjaro KIBO',
                description: 'シャープな酸味と爽やかな後味。高品質なタンザニア産の豆です。',
                roastLevel: 'Medium',
                tags: ['Africa', 'Acidity', 'Tanzania'],
                weight: '200g',
                imageUrl: '/assets/beans/tc-kilimanjaro.jpg'
            },
            {
                id: 'tc-mandheling',
                name: 'Sumatra Mandheling G1',
                description: 'ユニークなアーシーフレーバーとフルボディ。スマトラ、インドネシア産の最高等級です。',
                roastLevel: 'Dark',
                tags: ['Asia/Pacific', 'Earthy', 'Full Body'],
                weight: '150g',
                imageUrl: '/assets/beans/tc-mandheling.jpg'
            },
            {
                id: 'tc-ethiopia',
                name: 'Ethiopia Mocha G1 Uraga',
                description: 'フルーティーでワインのような風味とフローラルなアロマ。ナチュラルプロセス。',
                roastLevel: 'Medium',
                tags: ['Africa', 'Fruity', 'Floral'],
                weight: '200g',
                imageUrl: '/assets/beans/tc-ethiopia.jpg'
            },
            {
                id: 'tc-costarica',
                name: 'Costa Rica La Minita',
                description: 'クリーンでブライト、ハニーのような甘さ。スイートウォッシュドプロセス。',
                roastLevel: 'Medium',
                tags: ['Latin America', 'Sweet', 'Clean'],
                weight: '200g',
                imageUrl: '/assets/beans/tc-costarica.jpg'
            },
            {
                id: 'tc-brazil',
                name: 'Brazil Fazenda Bau',
                description: 'ナッティーでチョコレートのような風味、スムースなボディ。クラシックなブラジルプロファイル。',
                roastLevel: 'Medium',
                tags: ['Latin America', 'Nutty', 'Chocolate'],
                weight: '200g',
                imageUrl: '/assets/beans/tc-brazil.jpg'
            },
            {
                id: 'tc-decaf',
                name: 'Decaf Brazil IP',
                description: 'スイスウォータープロセスでカフェイン除去。フルフレーバーを維持しています。',
                roastLevel: 'Medium',
                tags: ['Decaf', 'Brazil'],
                weight: '200g',
                imageUrl: '/assets/beans/tc-decaf.jpg'
            },
            {
                id: 'tc-espresso',
                name: 'Espresso Classico',
                description: 'リッチでボールドなエスプレッソブレンド。ラテやカプチーノに最適です。',
                roastLevel: 'Dark',
                tags: ['Espresso', 'Bold'],
                weight: '200g',
                imageUrl: '/assets/beans/tc-espresso.jpg'
            },
            {
                id: 'tc-romance',
                name: 'Romance Roast',
                description: '季節限定ブレンド。チョコレートノートが特徴で、スイーツとの相性が抜群です。',
                roastLevel: 'Dark',
                tags: ['Seasonal', 'Chocolate', 'Sweet'],
                weight: '200g',
                imageUrl: '/assets/beans/tc-romance.jpg'
            },
            {
                id: 'tc-guatemala',
                name: 'Guatemala Cupping Gold',
                description: 'グアテマラのカッピングコンテストで金賞を受賞した豆。複雑で洗練された味わいです。',
                roastLevel: 'Medium',
                tags: ['Latin America', 'Award', 'Complex'],
                weight: '200g',
                imageUrl: '/assets/beans/tc-guatemala.jpg'
            },
            {
                id: 'tc-oleMonare',
                name: 'Café Ole Monare',
                description: 'カフェオレ専用に作られたブレンド。ミルクとの相性を追求した一杯です。',
                roastLevel: 'Dark',
                tags: ['Milk Friendly', 'Café Ole'],
                weight: '200g',
                imageUrl: '/assets/beans/tc-oleMonare.jpg'
            }
        ]
    },
    {
        id: 'kaldi',
        name: 'Kaldi Coffee Farm',
        logoColor: '#F48E2F',
        beans: [
            {
                id: 'k-mild',
                name: 'Mild Kaldi',
                description: 'カルディを代表する看板商品。ブラジル豆本来の優しい甘さと柔らかな口当たり、持続する甘さのバランスの良さが特徴です。',
                roastLevel: 'Medium',
                tags: ['Brazil', 'Colombia', 'Popular', 'No.1'],
                weight: '200g',
                imageUrl: '/assets/beans/k-mild.jpg'
            },
            {
                id: 'k-rich',
                name: 'Rich Blend',
                description: '強い苦味と深いリッチさを持つブレンド。カフェオレに最適です。',
                roastLevel: 'Dark',
                tags: ['Bitter', 'Rich', 'Milk Friendly'],
                weight: '200g',
                imageUrl: '/assets/beans/k-rich.jpg'
            },
            {
                id: 'k-special',
                name: 'Special Blend',
                description: '中深煎りでコクと飲みごたえがあり、苦味と酸味のバランスが良い。マイルドカルディからのステップアップに最適です。',
                roastLevel: 'Medium',
                tags: ['Balanced', 'Signature'],
                weight: '200g',
                imageUrl: '/assets/beans/k-special.jpg'
            },
            {
                id: 'k-italian',
                name: 'Italian Roast',
                description: 'リッチな苦味と強いボディ。エスプレッソローストのスタンダードです。夏はアイスブレンドとして販売。',
                roastLevel: 'Dark',
                tags: ['Espresso', 'Bitter'],
                weight: '200g',
                imageUrl: '/assets/beans/k-italian.jpg'
            },
            {
                id: 'k-mocha-blend',
                name: 'Mocha Blend',
                description: 'エチオピアモカ豆からの豊かなワインのようなアロマ。芳醇な香りが特徴です。',
                roastLevel: 'Medium',
                tags: ['Aromatic', 'Ethiopia', 'Winey'],
                weight: '200g',
                imageUrl: '/assets/beans/k-mocha-blend.jpg'
            },
            {
                id: 'k-blue-mtn',
                name: 'Blue Mountain Blend',
                description: 'コーヒーの王様、ブルーマウンテンを使用。やわらかな甘み、クセのない酸味、すっきりとした苦味が調和した上品な味わいです。',
                roastLevel: 'Medium',
                tags: ['Premium', 'Jamaica', 'Elegant'],
                weight: '200g',
                imageUrl: '/assets/beans/k-blue-mtn.jpg'
            },
            {
                id: 'k-mandheling',
                name: 'Mandheling',
                description: 'ワイルドなアロマと力強いボディ。インドネシアのファンに愛される一杯です。',
                roastLevel: 'Dark',
                tags: ['Indonesia', 'Wild', 'Earthy'],
                weight: '200g',
                imageUrl: '/assets/beans/k-mandheling.jpg'
            },
            {
                id: 'k-canario',
                name: 'Canario',
                description: 'ブラジルの黄色いコーヒーチェリー。スイートな酸味とシトラスノートが特徴の希少種です。',
                roastLevel: 'Light',
                tags: ['Brazil', 'Rare', 'Citrus', 'Sweet'],
                weight: '200g',
                imageUrl: '/assets/beans/k-canario.jpg'
            },
            {
                id: 'k-kilimanjaro',
                name: 'Kilimanjaro',
                description: 'フローラルなアロマと明るい酸味。エレガントなタンザニア産の豆です。',
                roastLevel: 'Medium',
                tags: ['Africa', 'Floral', 'Bright'],
                weight: '200g',
                imageUrl: '/assets/beans/k-kilimanjaro.jpg'
            },
            {
                id: 'k-guatemala',
                name: 'Guatemala',
                description: 'チョコレートとナッツのフレーバー、スムースなボディが特徴です。',
                roastLevel: 'Medium',
                tags: ['Latin America', 'Chocolate', 'Nutty'],
                weight: '200g',
                imageUrl: '/assets/beans/k-guatemala.jpg'
            },
            {
                id: 'k-french',
                name: 'French Roast',
                description: '深煎りでスモーキーなアロマ。力強くボールドな味わいです。',
                roastLevel: 'Dark',
                tags: ['Smoky', 'Bold'],
                weight: '200g',
                imageUrl: '/assets/beans/k-french.jpg'
            },
            {
                id: 'k-noel',
                name: 'Noel (Winter Limited)',
                description: '冬季限定の季節ブレンド。深みのある豊かなフレーバーが特徴です。',
                roastLevel: 'Dark',
                tags: ['Seasonal', 'Winter', 'Rich'],
                weight: '200g',
                imageUrl: '/assets/beans/k-noel.jpg'
            },
            {
                id: 'k-mocha-matari',
                name: 'Mocha Matari',
                description: 'プレミアムなイエメン産モカ。複雑なフルーティーでワイニーなノートが特徴です。',
                roastLevel: 'Medium',
                tags: ['Premium', 'Yemen', 'Fruity'],
                weight: '200g',
                imageUrl: '/assets/beans/k-mocha-matari.jpg'
            },
            {
                id: 'k-blue-no1',
                name: 'Blue Mountain No.1',
                description: 'ブルーマウンテンの最高等級。卓越したバランスと気品が特徴です。',
                roastLevel: 'Medium',
                tags: ['Premium', 'Jamaica', 'No.1'],
                weight: '200g',
                imageUrl: '/assets/beans/k-blue-no1.jpg'
            },
            {
                id: 'k-panama-geisha',
                name: 'Panama Geisha',
                description: '超プレミアムな希少品種。ジャスミンのようなフローラルなアロマが特徴です。',
                roastLevel: 'Light',
                tags: ['Ultra Premium', 'Rare', 'Floral'],
                weight: '100g',
                imageUrl: '/assets/beans/k-panama-geisha.jpg'
            },
            {
                id: 'k-morning',
                name: 'Morning Blend',
                description: '目覚めの一杯におすすめ。キレの良い苦みが特徴のブレンドです。',
                roastLevel: 'Medium',
                tags: ['Morning', 'Sharp'],
                weight: '200g',
                imageUrl: '/assets/beans/k-morning.jpg'
            },
            {
                id: 'k-cafeole',
                name: 'Café Ole Blend',
                description: 'カフェオレ専用に作られたブレンド。温めたミルクと合わせると香ばしく豊かなコクとすっきりとした後味が楽しめます。',
                roastLevel: 'Dark',
                tags: ['Milk Friendly', 'Café Ole'],
                weight: '200g',
                imageUrl: '/assets/beans/k-cafeole.jpg'
            },
            {
                id: 'k-espresso',
                name: 'Espresso Blend',
                description: '強いボディと長く続くアロマが特徴。どんな淹れ方でも味と香りが引き立ちます。',
                roastLevel: 'Dark',
                tags: ['Espresso', 'Body'],
                weight: '200g',
                imageUrl: '/assets/beans/k-espresso.jpg'
            },
            {
                id: 'k-mocha-french',
                name: 'Mocha French',
                description: 'エチオピア産モカのバニラやジャスミンを思わせる華やかな香りと、透明感のある苦味が魅力です。',
                roastLevel: 'Dark',
                tags: ['Ethiopia', 'Floral', 'Bitter'],
                weight: '200g',
                imageUrl: '/assets/beans/k-mocha-french.jpg'
            }
        ]
    },
    {
        id: 'doutor',
        name: 'Doutor Coffee',
        logoColor: '#FFC800',
        beans: [
            {
                id: 'd-mild',
                name: 'Mild Blend',
                description: 'ドトールのスタンダード。ほどよい苦味と爽やかな酸味、香りと甘みのバランスが特徴です。店舗のブレンドコーヒーやアメリカンコーヒーにも使用されています。',
                roastLevel: 'Medium',
                tags: ['Standard', 'Balanced'],
                weight: '200g',
                imageUrl: '/assets/beans/d-mild.jpg'
            },
            {
                id: 'd-royal',
                name: 'Royal Crystal Blend',
                description: '上品な甘みと爽やかな酸味が印象的。黒糖のような甘さとキャラメルのような香ばしさ、すっきりとした後味が楽しめます。',
                roastLevel: 'Medium',
                tags: ['Elegant', 'Sweet', 'Clear'],
                weight: '200g',
                imageUrl: '/assets/beans/d-royal.jpg'
            },
            {
                id: 'd-golden',
                name: 'Golden Mocha Blend',
                description: 'モカの豊かな風味を活かした奥行きのある味わい。ベリーのような甘酸っぱさとナッツのような香ばしさが感じられます。',
                roastLevel: 'Medium',
                tags: ['Mocha', 'Aroma', 'Soft Acidity'],
                weight: '200g',
                imageUrl: '/assets/beans/d-golden.jpg'
            },
            {
                id: 'd-italian',
                name: 'Italian Espresso',
                description: '深い苦味とリッチさが特徴。エスプレッソやカフェラテに最適です。',
                roastLevel: 'Dark',
                tags: ['Espresso', 'Deep Bitter'],
                weight: '200g',
                imageUrl: '/assets/beans/d-italian.jpg'
            },
            {
                id: 'd-blue-no1',
                name: 'Blue Mountain No.1',
                description: 'ブルーマウンテンの最高等級。卓越したバランスと気品が特徴です。',
                roastLevel: 'Medium',
                tags: ['Premium', 'King of Coffee'],
                weight: '200g',
                imageUrl: '/assets/beans/d-blue-no1.jpg'
            },
            {
                id: 'd-blue-blend',
                name: 'Blue Mountain Blend',
                description: 'ブルーマウンテンをベースにしたブレンド。苦味控えめですっきりとした後味が特徴です。',
                roastLevel: 'Medium',
                tags: ['Premium', 'Clean'],
                weight: '200g',
                imageUrl: '/assets/beans/d-blue-blend.jpg'
            },
            {
                id: 'd-mocha',
                name: 'Mocha',
                description: 'フルーティーでワインのようなエチオピアモカ。独特のキャラクターが特徴です。',
                roastLevel: 'Medium',
                tags: ['Ethiopia', 'Fruity', 'Winey'],
                weight: '200g',
                imageUrl: '/assets/beans/d-mocha.jpg'
            },
            {
                id: 'd-mandheling',
                name: 'Mandheling',
                description: 'アーシーでフルボディのインドネシア産豆。深いフレーバーが特徴です。',
                roastLevel: 'Dark',
                tags: ['Indonesia', 'Earthy', 'Full Body'],
                weight: '200g',
                imageUrl: '/assets/beans/d-mandheling.jpg'
            },
            {
                id: 'd-kilimanjaro',
                name: 'Kilimanjaro',
                description: 'タンザニア産の明るい酸味とクリーンな味わいが特徴です。',
                roastLevel: 'Medium',
                tags: ['Africa', 'Bright', 'Clean'],
                weight: '200g',
                imageUrl: '/assets/beans/d-kilimanjaro.jpg'
            },
            {
                id: 'd-guatemala',
                name: 'Guatemala',
                description: 'チョコレートとナッツのノート、バランスの取れた酸味が特徴です。',
                roastLevel: 'Medium',
                tags: ['Latin America', 'Chocolate', 'Nutty'],
                weight: '200g',
                imageUrl: '/assets/beans/d-guatemala.jpg'
            },
            {
                id: 'd-kenya',
                name: 'Kenya',
                description: '鮮やかな酸味とベリーノート。複雑で明るい味わいです。',
                roastLevel: 'Medium',
                tags: ['Africa', 'Berry', 'Vibrant'],
                weight: '200g',
                imageUrl: '/assets/beans/d-kenya.jpg'
            },
            {
                id: 'd-european',
                name: 'Café European',
                description: 'ヨーロピアンスタイルのダークロースト。リッチでアロマティックです。',
                roastLevel: 'Dark',
                tags: ['European', 'Rich', 'Aromatic'],
                weight: '200g',
                imageUrl: '/assets/beans/d-european.jpg'
            },
            {
                id: 'd-decaf',
                name: 'Caffeine-less',
                description: 'カフェインを除去したブレンド。いつでもコーヒーを楽しめます。',
                roastLevel: 'Medium',
                tags: ['Decaf', 'Anytime'],
                weight: '200g',
                imageUrl: '/assets/beans/d-decaf.jpg'
            },
            {
                id: 'd-premium-mild',
                name: 'Premium Mild Blend',
                description: '秋冬限定の季節ブレンド。最高等級豆を100%使用し、炭火焙煎で引き出された甘味と香ばしさが楽しめます。',
                roastLevel: 'Medium',
                tags: ['Seasonal', 'Premium', 'Charcoal Roast'],
                weight: '200g',
                imageUrl: '/assets/beans/d-premium-mild.jpg'
            },
            {
                id: 'd-dominican',
                name: 'Dominican Blend',
                description: '希少な原種ティピカ種を含む限定版。ベリーとチョコレートのノートが特徴です。',
                roastLevel: 'Medium',
                tags: ['Limited', 'Rare', 'Berry'],
                weight: '200g',
                imageUrl: '/assets/beans/d-dominican.jpg'
            },
            {
                id: 'd-hawaii-kona',
                name: 'Mauka Meadows Extra Fancy',
                description: 'ドトール自社農園の最高等級ハワイコナ。ビターチョコレートやブラウンシュガーのような甘みと心地よい苦味が特徴です。',
                roastLevel: 'Medium',
                tags: ['Premium', 'Hawaii', 'Own Farm'],
                weight: '200g',
                imageUrl: '/assets/beans/d-hawaii-kona.jpg'
            },
            {
                id: 'd-hawaii-blend',
                name: 'Hawaii Kona Blend',
                description: 'ハワイコナをブレンドした贅沢な一杯。まろやかで上品な味わいです。',
                roastLevel: 'Medium',
                tags: ['Premium', 'Hawaii', 'Mellow'],
                weight: '200g',
                imageUrl: '/assets/beans/d-hawaii-blend.jpg'
            }
        ]
    }
];
