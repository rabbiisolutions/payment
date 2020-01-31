const self = {
  title: 'The Cost of being a Self Sponsored student in public university',
  desc: [
      {key: 'aa', value: ['Average cost of degree per year', '=  Ksh  160,000']},
    {key: 'ab', value: ['Average cost of degree for 4 years', '=  Ksh 640,000']}
  ]
};

const govt = {
  title: 'The Cost of being a Government Sponsored student in public university',
  desc: [
    {key: 'ba', value: ['Average cost of degree per year', ' = Ksh   30,000']},
    {key: 'bb', value: ['Average cost of degree for 4 years', ' = Ksh 120,000']}
  ]
};

const savings = {
  title: 'Getting good grades can save you up to',
  desc: [
    {key: 'ca', value: ['Ksh 640,000 ', '-']},
    {key: 'cb', value: ['Ksh 120,000', '= Ksh 520,000']},
  ]
};

const tagLine = ['An investment in tuition helps you get good grades which saves you',
' money proportional to the total fees you have paid',
' in both primary and high school.'];

const facts = {
  self: self, govt: govt, savings: savings, tagLine: tagLine
};

export default facts;
