/**
 * MIT License

Copyright (c) 2017 deepakshajan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

var options = {
				   solution: 			[[null,	null,	null,	null,	 'P',	 'S',	 'Y',	 'C',	 'H',   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	 'A',    'R',    'N',    'A',    'V',   null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	 'P',    'A',    'Y',    'A',    'L',   null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	 'P',    'A',    'G',    'L',    'I',   null,   null,   null,   null,   null,   null,   null],
										[ 'A',	 'S',	 'T',	 'R',	 'O',	 'N',	 'O',	 'M',	 'Y',   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	 'M',	 'A',	 'H',	 'A',	 'B',    'A',    'L',    'I',    'P',    'U',    'R',    'A',    'M',   null,   null,   null],
										[null,	null,	null,	null,	 'S',	 'H',	 'A',	 'D',	 'I',   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	 'R',    'I',    'D',    'E',    'S',   null,   null,   null,   null,   null,   null,   null],
										[null,	 'M',	 'U',	 'N',	 'C',	 'H',	 'N',	 'U',	 'T',    'S',   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	 'H',    'E',    'A',    'R',    'T',   null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	 'A',	 'N',	 'D',    'H',    'A',    'D',    'H',    'U',    'N',   null,   null,   null,   null,   null],
										[null,	null,	null,	 'T',	 'H',	 'A',	 'T',	 'M',	 'A',    'D',    'R',    'A',    'S',    'P',    'L',    'A',    'C',    'E',   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	 'Y',    'U',    'M',    'M',    'P',    'Y',    'S',   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	 'M',    'C',    'D',    'O',    'N',    'A',    'L',    'D',    'S',   null,   null,   null],
										[null,	null,	null,	null,	null,	 'U',	 'R',	 'M',	 'I',    'L',    'A',    null,   null,   null,  null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	 'T',    'E',    'A',    null,   null,   null,  null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	 'V',	 'I',	 'C',	 'H',    'U',    null,   null,   null,  null,   null,   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	 'B',	 'U',    'L',    'L',     'S',  	'E',   'Y',  'E',   null,   null,   null,   null,   null],
										[null,	null,	null,	null,	null,	null,	null,	null,	 'L',    'E',    'T',     'T',   	'E',   'R',  'S',   null,   null,   null,   null,	null],
										[null,	null,	null,	null,	null,	 'L',	 'I',	 'Z',	 'A',    'R',    'D',    null,   null,   null,  null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
		                                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]],


		            index: 				[[null,   null,   null,   null,   1,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   null,   null,   null,   null,   null,   2,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   null,   null,   null,   null,   null,   3,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   null,   null,   null,   null,   null,   4,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [5,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   null,   6,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   null,   7,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   null,   null,   null,   null,   null,   8,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   9,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   null,   null,   null,   null,   null,   10,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   null,   null,   null,   11,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   12,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   null,   null,   null,   null,   null,   13,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   null,   null,   null,   null,   null,   14,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   null,   null,   15,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   null,   null,   null,   null,   null,   16,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   null,   null,   17,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,   null,   null,   null,   null,   null,   null,   18,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
								        [null,	null,	null,	null,	null,	null,	null,	null,	19,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
						                [null,	null,	null,	null,	null,	20,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
						                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
						                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
						                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null],
						                [null,	null,	null,	null,	null,	null,	null,	null,	null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null,   null]],

		         questions_across: [	  "1. You mostly fall for my answer while playing this.(Solomon)",
		                                  "2. \'Paagal hai par cute hai\' (Sampoorna)",
		                                  "3. Your favourite Behena.(Shruti Nath)",
		                                  "4. A word that best describes you and rhymes with Fugli.(Swetha)",
		                                  "5. We went to this camp during our summer holidays.(Harshini)",
		                                  "6. Our first and last colour dress-educational tour.(Saranya)",
		                                  "7. You renamed our drama to ______ plot.(Vignesh)",
		                                  "8.  I skip my cycle _____ to walk you home.(Navneeth)",
		                                  "9.  The times we went to Nescafe, chilling out after a tough day at work, so much fun la? So, hey,I used to get something, a chocolate and I share with you(at times) as we keep talking about oor kadha, ulaga kadha. What's the name of the chocolate? Crispy and nutty, dhayavu senji kandu pidichu tholaiyum.Two words together, write them together.(Siddharth)",
		                                  "10.  I have yours, you have mine.(Sudharshan)",
		                                  "11. Audi Movie nights were fun.Iruttu la kuruttu hero padam paathom la.(Guru)",
		                                  "12. We went to this place after Bessy beach.Nalla pasta thinnom.Sudh kooda late aa vandhaan pakki.Ringa boi kooda vandhan.Apram Phoenix mall poitu,2-1 results paathutu, veetuku ponom. Place enna?(Srinitesh)",
		                                  "13. Me,you,Sudharshan and Srinitesh once had dinner in Mess-2 as usual. 9 mani ku sapda aramicha namma, 11:30 varaikum mess2 laye vetti kadha pesinom.Yaarukum thookam varla, so we all walked till medc and spoke for another hour there. Aprom gate varaikum laam round adichu, kadaisiya oru food outlet la okkandhu 1:40 varaikum aratta adichom. (Pranav)",
		                                  "14. First time enna nee vechu senja edam-kadha solla vecha place and idhe maari innoru place opposite la dhaan unnaku Sneha va introduce pannen.(Bharath)",
		                                  "15. The Ramayan sister you relate to. (Harini)",
		                                  "16. We shared our lives over this beverage.(Keertana)",
		                                  "17. She is a tiktoker, lyricist, vera level singer, dancer, online la earrings sales pannuva, ippo cooking layum kalam erangirka.(Rajma)",
		                                  "18. We always eye this dessert in C3.(Mythreyi)",
		                                  "19.  These were the starting point which marked the value of our friendship  /  love. (Sruthe)",
		                                  "20.   This creature,like me, loves your room.(Siri)"],

		         questions_down: []

	};


		cwp_nmsp.activateCWP(document.getElementById("myPuzzle"),false,options);