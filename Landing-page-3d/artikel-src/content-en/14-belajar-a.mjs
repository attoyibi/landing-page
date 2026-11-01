// English versions of articles in ../content/14-belajar-a.mjs. See artikel-src/STANDAR-PENULISAN.md, section 7.

export default [
    {
        slug: 'active-recall-teknik-belajar-paling-efektif',
        enSlug: 'active-recall-study-technique',
        title: 'Active Recall: Why Testing Yourself Beats Re-Reading',
        description: 'Re-reading feels productive but achieves little. Active recall makes your brain retrieve information, which is proven to strengthen memory. Here is how.',
        tags: ['active recall', 'retrieval practice', 'how to study', 'exams', 'effective learning'],
        cta: 'none',
        lead: 'Many students study by re-reading and highlighting their notes. It feels familiar, so it feels like understanding. That familiarity is misleading. Education research consistently finds that testing yourself is far more effective than re-reading.',
        takeaways: [
            'Re-reading feels familiar but gives little; testing yourself strengthens memory.',
            'Close your notes and write what you remember, do practice questions without looking at the answers, and explain ideas in your own words.',
            'Struggling to remember is a sign you are learning, not a sign of failure.',
            'Use AI to write the questions, not to give you the answers.',
        ],
        sources: [['Roediger and Karpicke (2006), Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention, Psychological Science', 'https://doi.org/10.1111/j.1467-9280.2006.01693.x']],
        faq: [
            ['Why does it feel harder?', 'Because your brain is working to retrieve the information. That productive difficulty is exactly what strengthens memory.'],
            ['Is re-reading completely useless?', 'It is useful for first exposure, but the results are far smaller than testing yourself.'],
            ['How long should a self-testing session be?', 'Short but frequent. For example 10-20 minutes after studying, and again a few days later.'],
        ],
        body: [
            { h2: 'What feels like studying vs. what really is' },
            { svg: 'versus', label: 'Passive and active studying', left: { title: 'Passive (feels easy)', items: ['Re-reading notes', 'Highlighting text', 'Rewatching recordings', 'Copying notes word for word', 'Result: familiar but easily forgotten'] }, right: { title: 'Active (feels hard)', items: ['Closing your notes and explaining', 'Doing practice questions', 'Writing your own questions', 'Teaching someone else', 'Result: stronger memory'] }, caption: 'Struggling to remember is not a sign of failure; it is a sign your brain is working.' },
            { h2: 'How to apply it' },
            { w: 'cards', title: 'Tap a card for a practical technique', items: [{ tag: 'Technique', front: 'Close the book and write down everything you remember.', backTag: 'How', back: 'After reading a section, close it and write a summary from memory. Compare and fill in the gaps.' }, { tag: 'Technique', front: 'Two-sided flashcards.', backTag: 'How', back: 'Question on the front, answer on the back. Answer out loud before you flip the card.' }, { tag: 'Technique', front: 'Practice problems and past exams.', backTag: 'How', back: 'Work through them without looking at your notes, then check.' }, { tag: 'Technique', front: 'The Feynman method.', backTag: 'How', back: 'Explain the concept in simple language as if to a young child. The parts where you stumble are the parts you do not understand yet.' }] },
            { w: 'builder', title: 'Study question builder', desc: 'Enter your topic, copy the text into an AI assistant to turn it into practice questions, then answer them yourself without looking.', fields: [{ id: 'topik', label: 'Topic you are studying', placeholder: 'e.g. the circulatory system' }, { id: 'level', label: 'Level', value: 'High school' }, { id: 'jumlah', label: 'Number of questions', value: '8' }], template: 'Create {jumlah} practice questions about {topik} for {level} level. Mix multiple choice, short answer and one reasoning question. Do not show the answers yet. After I have answered everything, mark my answers and explain the parts I got wrong.' },
            { h2: 'A simple routine' },
            { w: 'checklist', title: 'After every study session', items: ['Close your notes and write down the main points from memory.', 'Do at least a few practice questions without looking at the answers.', 'Mark what you got wrong or forgot, and review it tomorrow.', 'Explain one concept in your own words.', 'Reschedule the material you are still weak on.'] },
            { callout: 'Use AI as a question writer and feedback giver, not as the one who answers. If the AI always gives the answer first, you lose the main benefit: the effort of remembering.', kind: 'info', title: 'With AI help' },
        ],
    },
];
