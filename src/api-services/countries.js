const country_dict = {'Afghanistan': 1, 'Aland Islands': 2, 'Albania': 3, 'Algeria': 4, 'American Samoa': 5, 'Andorra': 6, 'Angola': 7, 'Anguilla': 8, 'Antigua and Barbuda': 9, 'Argentina': 10, 'Armenia': 11, 'Aruba': 12, 'Australia': 13, 'Azerbaijan': 14, 'Bahamas': 15, 'Bahrain': 16, 'Bangladesh': 17, 'Barbados': 18, 'Belarus': 19, 'Belgium': 20, 'Belize': 21, 'Benin': 22, 'Bermuda': 23, 'Bhutan': 24, 'Bolivia': 25, 'Bonaire, Sint Eustatius and Saba': 26, 'Bosnia and Herzegovina': 27, 'Botswana': 28, 'Brazil': 29, 'British Indian Ocean Territory': 30, 'Brunei Darussalam': 31, 'Bulgaria': 32, 'Burkina Faso': 33, 'Burundi': 34, 'Cambodia': 35, 'Cameroon': 36, 'Canada': 37, 'Cape Verde': 38, 'Cayman Islands': 39, 'Central African Republic': 40, 'Chad': 41, 'Chile': 42, 'China': 43, 'Christmas Island': 44, 'Cocos (Keeling) Islands': 45, 'Colombia': 46, 'Comoros': 47, 'Congo, Republic of the (Brazzaville)': 48, 'Cook Islands': 49, 'Costa Rica': 50, "Côte d'Ivoire, Republic of": 51, 'Croatia': 52, 'Cuba': 53, 'Curaçao': 54, 'Cyprus': 55, 'Czech Republic': 56, 'Denmark': 57, 'Djibouti': 58, 'Dominica': 59, 'Dominican Republic': 60, 'Ecuador': 61, 'Egypt': 62, 'El Salvador': 63, 'Equatorial Guinea': 64, 'Eritrea': 65, 'Estonia': 66, 'Ethiopia': 67, 'Falkland Islands (Islas Malvinas)': 68, 'Faroe Islands': 69, 'Fiji': 70, 'Finland': 71, 'France': 72, 'French Guiana': 73, 'Gabon': 74, 'Gambia, The': 75, 'Georgia': 76, 'Germany': 77, 'Ghana': 78, 'Gibraltar': 79, 'Greece': 80, 'Greenland': 81, 'Grenada': 82, 'Guadeloupe': 83, 'Guam': 84, 'Guatemala': 85, 'Guernsey': 86, 'Guinea': 87, 'Guinea-Bissau': 88, 'Guyana': 89, 'Haiti': 90, 'Holy See (Vatican City)': 91, 'Honduras': 92, 'Hong Kong': 93, 'Hungary': 94, 'Iceland': 95, 'India': 96, 'Indonesia': 97, 'Iran, Islamic Repuiblic of': 98, 'Iraq': 99, 'Ireland': 100, 'Isle of Man': 101, 'Israel': 102, 'Italy': 103, 'Jamaica': 104, 'Japan': 105, 'Jersey': 106, 'Jordan': 107, 'Kazakhstan': 108, 'Kenya': 109, 'Kiribati': 110, "Korea, Democratic People's Republic of": 111, 'Korea, Republic of': 112, 'Kuwait': 113, 'Kyrgyzstan': 114, 'Laos': 115, 'Latvia': 116, 'Lebanon': 117, 'Lesotho': 118, 'Liberia': 119, 'Libya': 120, 'Liechtenstein': 121, 'Lithuania': 122, 'Luxembourg': 123, 'Macao': 124, 'Macedonia, Republic of': 125, 'Madagascar': 126, 'Malawi': 127, 'Malaysia': 128, 'Maldives': 129, 'Mali': 130, 'Malta': 131, 'Marshall Islands': 132, 'Martinique': 133, 'Mauritania': 134, 'Mauritius': 135, 'Mayotte': 136, 'Mexico': 137, 'Micronesia, Federated States of': 138, 'Moldova': 139, 'Monaco': 140, 'Mongolia': 141, 'Montenegro': 142, 'Montserrat': 143, 'Morocco': 144, 'Mozambique': 145, 'Myanmar': 146, 'Namibia': 147, 'Nauru': 148, 'Nepal': 149, 'Netherlands': 150, 'New Caledonia': 151, 'New Zealand': 152, 'Nicaragua': 153, 'Niger': 154, 'Nigeria': 155, 'Niue': 156, 'Northern Mariana Islands': 157, 'Norway': 158, 'Oman': 159, 'Pakistan': 160, 'Palau': 161, 'Palestine, State of': 162, 'Panama': 163, 'Papua New Guinea': 164, 'Paraguay': 165, 'Peru': 166, 'Philippines': 167, 'Poland': 168, 'Portugal': 169, 'Puerto Rico': 170, 'Qatar': 171, 'Réunion': 172, 'Romania': 173, 'Russian Federation': 174, 'Rwanda': 175, 'Saint Barthélemy': 176, 'Saint Helena, Ascension and Tristan da Cunha': 177, 'Saint Kitts and Nevis': 178, 'Saint Lucia': 179, 'Saint Pierre and Miquelon': 180, 'Saint Vincent and the Grenadines': 181, 'Samoa': 182, 'San Marino': 183, 'Sao Tome and Principe': 184, 'Saudi Arabia': 185, 'Senegal': 186, 'Serbia': 187, 'Seychelles': 188, 'Sierra Leone': 189, 'Singapore': 190, 'Sint Maarten (Dunch part)': 191, 'Slovakia': 192, 'Slovenia': 193, 'Solomon Islands': 194, 'Somalia': 195, 'South Africa': 196, 'South Georgia and South Sandwich Islands': 197, 'South Sudan': 198, 'Spain': 199, 'Sri Lanka': 200, 'Sudan': 201, 'Suriname': 202, 'Swaziland': 203, 'Sweden': 204, 'Switzerland': 205, 'Syrian Arab Republic': 206, 'Taiwan': 207, 'Tajikistan': 208, 'Tanzania, United Republic of': 209, 'Thailand': 210, 'Timor-leste': 211, 'Togo': 212, 'Tonga': 213, 'Trinidad and Tobago': 214, 'Tunisia': 215, 'Turkey': 216, 'Turkmenistan': 217, 'Tuvalu': 218, 'Uganda': 219, 'Ukraine': 220, 'United Arab Emirates': 221, 'United Kingdom': 222, 'United States': 223, 'United States Minor Outlying Islands': 224, 'Uruguay': 225, 'Uzbekistan': 226, 'Vanuatu': 227, 'Venezuela, Bolivarian Republic of': 228, 'Vietnam': 229, 'Virgin Islands, British': 230, 'Virgin Islands, U.S.': 231, 'Western Sahara': 232, 'Yemen': 233, 'Zambia': 234, 'Zimbabwe': 235};
export const countries = country_dict;