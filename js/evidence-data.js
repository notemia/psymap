const EVIDENCE_DATA = [
  {
    "id": "icd11-who",
    "category": "clinicalGuidelines",
    "citation_ru": "WHO. ICD-11 Reference Guide. Geneva: World Health Organization; 2022.",
    "citation_en": "WHO. ICD-11 Reference Guide. Geneva: World Health Organization; 2022.",
    "url": "https://icdcdn.who.int/icd11referenceguide/en/refguide.pdf",
    "relevance_ru": "Диагностическая классификация, дифференциальный фокус",
    "relevance_en": "Diagnostic classification, differential focus"
  },
  {
    "id": "nice-depression-ng222",
    "category": "clinicalGuidelines",
    "citation_ru": "NICE. Depression in adults: treatment and management (NG222). 2022.",
    "citation_en": "NICE. Depression in adults: treatment and management (NG222). 2022.",
    "url": "https://www.nice.org.uk/guidance/ng222",
    "relevance_ru": "Депрессия: КПТ, поведенческая активация, ступенчатая помощь",
    "relevance_en": "Depression: CBT, behavioral activation, stepped care"
  },
  {
    "id": "nice-anxiety-cg113",
    "category": "clinicalGuidelines",
    "citation_ru": "NICE. Generalised anxiety disorder and panic disorder in adults (CG113). 2011; updated 2020; reviewed 2024.",
    "citation_en": "NICE. Generalised anxiety disorder and panic disorder in adults (CG113). 2011; updated 2020; reviewed 2024.",
    "url": "https://www.nice.org.uk/guidance/cg113",
    "relevance_ru": "Тревога, паника: КПТ, экспозиция, первичная оценка",
    "relevance_en": "Anxiety, panic: CBT, exposure, initial assessment"
  },
  {
    "id": "nice-social-anxiety-cg159",
    "category": "clinicalGuidelines",
    "citation_ru": "NICE. Social anxiety disorder: recognition, assessment and treatment (CG159). 2013; reviewed 2024.",
    "citation_en": "NICE. Social anxiety disorder: recognition, assessment and treatment (CG159). 2013; reviewed 2024.",
    "url": "https://www.nice.org.uk/guidance/cg159",
    "relevance_ru": "Социальная тревога: специализированная КПТ (Clark & Wells, Heimberg)",
    "relevance_en": "Social anxiety: disorder-specific CBT (Clark & Wells, Heimberg)"
  },
  {
    "id": "nice-ocd-cg31",
    "category": "clinicalGuidelines",
    "citation_ru": "NICE. Obsessive-compulsive disorder and body dysmorphic disorder (CG31). 2005; reviewed 2024.",
    "citation_en": "NICE. Obsessive-compulsive disorder and body dysmorphic disorder (CG31). 2005; reviewed 2024.",
    "url": "https://www.nice.org.uk/guidance/cg31",
    "relevance_ru": "ОКР: ERP, КПТ, ступенчатая модель",
    "relevance_en": "OCD: ERP, CBT, stepped-care model"
  },
  {
    "id": "nice-eating-ng69",
    "category": "clinicalGuidelines",
    "citation_ru": "NICE. Eating disorders: recognition and treatment (NG69). 2017; updated 2020; reviewed 2024.",
    "citation_en": "NICE. Eating disorders: recognition and treatment (NG69). 2017; updated 2020; reviewed 2024.",
    "url": "https://www.nice.org.uk/guidance/ng69",
    "relevance_ru": "РПП: оценка, мониторинг рисков, CBT-E",
    "relevance_en": "Eating disorders: assessment, risk monitoring, CBT-E"
  },
  {
    "id": "nice-selfharm-ng225",
    "category": "clinicalGuidelines",
    "citation_ru": "NICE. Self-harm: assessment, management and preventing recurrence (NG225). 2022.",
    "citation_en": "NICE. Self-harm: assessment, management and preventing recurrence (NG225). 2022.",
    "url": "https://www.nice.org.uk/guidance/ng225",
    "relevance_ru": "Самоповреждение: безопасность, оценка, поддержка",
    "relevance_en": "Self-harm: safety, assessment, support"
  },
  {
    "id": "vadod-ptsd-2023",
    "category": "clinicalGuidelines",
    "citation_ru": "VA/DoD. Clinical Practice Guideline for Management of PTSD and Acute Stress Disorder. Version 4.0. 2023.",
    "citation_en": "VA/DoD. Clinical Practice Guideline for Management of PTSD and Acute Stress Disorder. Version 4.0. 2023.",
    "url": "https://healthquality.va.gov/guidelines/mh/ptsd/",
    "relevance_ru": "ПТСР: фазовая работа, EMDR, CPT, пролонгированная экспозиция",
    "relevance_en": "PTSD: phase-based work, EMDR, CPT, prolonged exposure"
  },
  {
    "id": "istss-ptsd-2019",
    "category": "clinicalGuidelines",
    "citation_ru": "ISTSS. Posttraumatic Stress Disorder Prevention and Treatment Guidelines. 2019.",
    "citation_en": "ISTSS. Posttraumatic Stress Disorder Prevention and Treatment Guidelines. 2019.",
    "url": "https://istss.org/clinical-resources/treating-trauma/new-istss-prevention-and-treatment-guidelines",
    "relevance_ru": "ПТСР: доказательные протоколы, профилактика",
    "relevance_en": "PTSD: evidence-based protocols, prevention"
  },
  {
    "id": "apa-depression-2019",
    "category": "clinicalGuidelines",
    "citation_ru": "APA. Clinical Practice Guideline for the Treatment of Depression Across Three Age Cohorts. 2019.",
    "citation_en": "APA. Clinical Practice Guideline for the Treatment of Depression Across Three Age Cohorts. 2019.",
    "url": "https://www.apa.org/depression-guideline",
    "relevance_ru": "Депрессия: КПТ, BA, MBCT, межличностная терапия",
    "relevance_en": "Depression: CBT, BA, MBCT, interpersonal therapy"
  },
  {
    "id": "aasm-insomnia-2021",
    "category": "clinicalGuidelines",
    "citation_ru": "AASM. Behavioral and psychological treatments for chronic insomnia disorder in adults. 2021. PMC7853203.",
    "citation_en": "AASM. Behavioral and psychological treatments for chronic insomnia disorder in adults. 2021. PMC7853203.",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7853203/",
    "relevance_ru": "Бессонница: CBT-I, стимул-контроль, ограничение сна",
    "relevance_en": "Insomnia: CBT-I, stimulus control, sleep restriction"
  },
  {
    "id": "who-ipv-2014",
    "category": "clinicalGuidelines",
    "citation_ru": "WHO. Health care for women subjected to intimate partner violence or sexual violence (WHO/RHR/14.26). 2014.",
    "citation_en": "WHO. Health care for women subjected to intimate partner violence or sexual violence (WHO/RHR/14.26). 2014.",
    "url": "https://www.who.int/publications/i/item/WHO-RHR-14.26",
    "relevance_ru": "Насилие: безопасность, first-line поддержка, маршрутизация",
    "relevance_en": "Violence: safety, first-line support, referral pathways"
  },
  {
    "id": "cuijpers-cbt-depression-2013",
    "category": "metaAnalyses",
    "citation_ru": "Cuijpers P, et al. A meta-analysis of cognitive-behavioural therapy for adult depression. J Affect Disord. 2013. PMID: 23062747.",
    "citation_en": "Cuijpers P, et al. A meta-analysis of cognitive-behavioural therapy for adult depression. J Affect Disord. 2013. PMID: 23062747.",
    "url": "https://pubmed.ncbi.nlm.nih.gov/23062747/",
    "relevance_ru": "Депрессия: эффективность КПТ у взрослых",
    "relevance_en": "Depression: CBT efficacy in adults"
  },
  {
    "id": "hofmann-cbt-anxiety-2012",
    "category": "metaAnalyses",
    "citation_ru": "Hofmann SG, et al. The efficacy of cognitive behavioral therapy: a review of meta-analyses. Cogn Ther Res. 2012. PMC3584580.",
    "citation_en": "Hofmann SG, et al. The efficacy of cognitive behavioral therapy: a review of meta-analyses. Cogn Ther Res. 2012. PMC3584580.",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3584580/",
    "relevance_ru": "Тревожные расстройства: КПТ как первая линия",
    "relevance_en": "Anxiety disorders: CBT as first-line"
  },
  {
    "id": "atjak-act-2015",
    "category": "metaAnalyses",
    "citation_ru": "A-Tjak JGL, et al. A meta-analysis of the efficacy of acceptance and commitment therapy. Psychother Psychosom. 2015. PMID: 25547522.",
    "citation_en": "A-Tjak JGL, et al. A meta-analysis of the efficacy of acceptance and commitment therapy. Psychother Psychosom. 2015. PMID: 25547522.",
    "url": "https://pubmed.ncbi.nlm.nih.gov/25547522/",
    "relevance_ru": "ACT: тревога, депрессия, хроническая боль, психологическая гибкость",
    "relevance_en": "ACT: anxiety, depression, chronic pain, psychological flexibility"
  },
  {
    "id": "johnson-eft-meta",
    "category": "metaAnalyses",
    "citation_ru": "Johnson SM, et al. The practice of emotionally focused couple therapy: meta-analyses. J Marital Fam Ther. 2019.",
    "citation_en": "Johnson SM, et al. The practice of emotionally focused couple therapy: meta-analyses. J Marital Fam Ther. 2019.",
    "url": "https://onlinelibrary.wiley.com/doi/10.1111/jmft.12336",
    "relevance_ru": "Отношения: эмоционально-фокусированная терапия пар",
    "relevance_en": "Relationships: Emotionally Focused Therapy for couples"
  },
  {
    "id": "shear-grief-meta",
    "category": "metaAnalyses",
    "citation_ru": "Shear MK, et al. Complicated grief treatment: efficacy meta-analysis. JAMA Psychiatry. 2016. PMC5735848.",
    "citation_en": "Shear MK, et al. Complicated grief treatment: efficacy meta-analysis. JAMA Psychiatry. 2016. PMC5735848.",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5735848/",
    "relevance_ru": "Горе: специфическая терапия осложнённого горя (CGT)",
    "relevance_en": "Grief: specific therapy for complicated grief (CGT)"
  },
  {
    "id": "masi-loneliness-2011",
    "category": "metaAnalyses",
    "citation_ru": "Masi CM, et al. A meta-analysis of interventions to reduce loneliness. Pers Soc Psychol Rev. 2011. PMC3865701.",
    "citation_en": "Masi CM, et al. A meta-analysis of interventions to reduce loneliness. Pers Soc Psychol Rev. 2011. PMC3865701.",
    "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3865701/",
    "relevance_ru": "Одиночество: когнитивная работа + социальные навыки",
    "relevance_en": "Loneliness: cognitive work + social skills"
  },
  {
    "id": "beck-anger-meta-1998",
    "category": "metaAnalyses",
    "citation_ru": "Beck R, Fernandez E. Cognitive-behavioral therapy in the treatment of anger: meta-analysis. Cogn Ther Res. 1998.",
    "citation_en": "Beck R, Fernandez E. Cognitive-behavioral therapy in the treatment of anger: meta-analysis. Cogn Ther Res. 1998.",
    "url": "https://link.springer.com/article/10.1023/A:1018763902991",
    "relevance_ru": "Гнев: КПТ-интервенции, управление возбуждением",
    "relevance_en": "Anger: CBT interventions, arousal management"
  },
  {
    "id": "panagioti-burnout-2017",
    "category": "metaAnalyses",
    "citation_ru": "Panagioti M, et al. Interventions to reduce burnout in physicians: systematic review & meta-analysis. JAMA Intern Med. 2017. PMID: 27918798.",
    "citation_en": "Panagioti M, et al. Interventions to reduce burnout in physicians: systematic review & meta-analysis. JAMA Intern Med. 2017. PMID: 27918798.",
    "url": "https://pubmed.ncbi.nlm.nih.gov/27918798/",
    "relevance_ru": "Выгорание: организационные и индивидуальные интервенции",
    "relevance_en": "Burnout: organizational and individual interventions"
  },
  {
    "id": "shafran-perfectionism-meta",
    "category": "metaAnalyses",
    "citation_ru": "Shafran R, et al. Clinical perfectionism: cognitive-behavioural model. Behav Res Ther. 2002. PMID: 12074372.",
    "citation_en": "Shafran R, et al. Clinical perfectionism: cognitive-behavioural model. Behav Res Ther. 2002. PMID: 12074372.",
    "url": "https://pubmed.ncbi.nlm.nih.gov/12074372/",
    "relevance_ru": "Перфекционизм: модель и интервенции «достаточно хорошо»",
    "relevance_en": "Perfectionism: model and 'good enough' interventions"
  },
  {
    "id": "book-beck-cbt",
    "category": "books",
    "citation_ru": "Beck AT, et al. Cognitive Therapy of Depression. Guilford Press; 1979.",
    "citation_en": "Beck AT, et al. Cognitive Therapy of Depression. Guilford Press; 1979.",
    "url": null,
    "relevance_ru": "КПТ-модальность: когнитивная триада, автоматические мысли, схемы",
    "relevance_en": "CBT modality: cognitive triad, automatic thoughts, schemas"
  },
  {
    "id": "book-mcwilliams-psa",
    "category": "books",
    "citation_ru": "McWilliams N. Psychoanalytic Diagnosis (2nd ed.). Guilford Press; 2011.",
    "citation_en": "McWilliams N. Psychoanalytic Diagnosis (2nd ed.). Guilford Press; 2011.",
    "url": null,
    "relevance_ru": "Психоанализ: структурная диагностика, защитные механизмы, характер",
    "relevance_en": "Psychoanalysis: structural diagnosis, defense mechanisms, character"
  },
  {
    "id": "book-perls-gestalt",
    "category": "books",
    "citation_ru": "Perls F, et al. Gestalt Therapy: Excitement and Growth in the Human Personality. 1951.",
    "citation_en": "Perls F, et al. Gestalt Therapy: Excitement and Growth in the Human Personality. 1951.",
    "url": null,
    "relevance_ru": "Гештальт-модальность: осознавание, контакт, эксперимент, ответственность",
    "relevance_en": "Gestalt modality: awareness, contact, experiment, responsibility"
  },
  {
    "id": "book-yalom-existential",
    "category": "books",
    "citation_ru": "Yalom ID. Existential Psychotherapy. Basic Books; 1980.",
    "citation_en": "Yalom ID. Existential Psychotherapy. Basic Books; 1980.",
    "url": null,
    "relevance_ru": "Экзистенциальная модальность: смерть, свобода, изоляция, бессмысленность",
    "relevance_en": "Existential modality: death, freedom, isolation, meaninglessness"
  },
  {
    "id": "book-minuchin-systemic",
    "category": "books",
    "citation_ru": "Minuchin S. Families and Family Therapy. Harvard University Press; 1974.",
    "citation_en": "Minuchin S. Families and Family Therapy. Harvard University Press; 1974.",
    "url": null,
    "relevance_ru": "Системная модальность: границы, иерархия, структурная терапия",
    "relevance_en": "Systemic modality: boundaries, hierarchy, structural therapy"
  },
  {
    "id": "book-berne-ta",
    "category": "books",
    "citation_ru": "Berne E. Games People Play. Grove Press; 1964.",
    "citation_en": "Berne E. Games People Play. Grove Press; 1964.",
    "url": null,
    "relevance_ru": "Транзактный анализ: эго-состояния, игры, сценарии",
    "relevance_en": "Transactional Analysis: ego states, games, scripts"
  },
  {
    "id": "book-bowlby-attachment",
    "category": "books",
    "citation_ru": "Bowlby J. Attachment and Loss (trilogy). Basic Books; 1969–1980.",
    "citation_en": "Bowlby J. Attachment and Loss (trilogy). Basic Books; 1969–1980.",
    "url": null,
    "relevance_ru": "Привязанность: теория, стили, рабочие модели",
    "relevance_en": "Attachment: theory, styles, working models"
  },
  {
    "id": "book-herman-trauma",
    "category": "books",
    "citation_ru": "Herman J. Trauma and Recovery. Basic Books; 1992.",
    "citation_en": "Herman J. Trauma and Recovery. Basic Books; 1992.",
    "url": null,
    "relevance_ru": "Травма: фазовый подход (безопасность, память, реконструкция)",
    "relevance_en": "Trauma: phase approach (safety, memory, reconstruction)"
  },
  {
    "id": "book-van-der-kolk",
    "category": "books",
    "citation_ru": "Van der Kolk B. The Body Keeps the Score. Viking; 2014.",
    "citation_en": "Van der Kolk B. The Body Keeps the Score. Viking; 2014.",
    "url": null,
    "relevance_ru": "Травма: телесный подход, нейробиология, EMDR, йога",
    "relevance_en": "Trauma: somatic approach, neurobiology, EMDR, yoga"
  },
  {
    "id": "book-hayes-act",
    "category": "books",
    "citation_ru": "Hayes SC, et al. Acceptance and Commitment Therapy (2nd ed.). Guilford Press; 2011.",
    "citation_en": "Hayes SC, et al. Acceptance and Commitment Therapy (2nd ed.). Guilford Press; 2011.",
    "url": null,
    "relevance_ru": "ACT: психологическая гибкость, ценности, дефузия, принятие",
    "relevance_en": "ACT: psychological flexibility, values, defusion, acceptance"
  },
  {
    "id": "book-young-schemas",
    "category": "books",
    "citation_ru": "Young JE, et al. Schema Therapy: A Practitioner's Guide. Guilford Press; 2003.",
    "citation_en": "Young JE, et al. Schema Therapy: A Practitioner's Guide. Guilford Press; 2003.",
    "url": null,
    "relevance_ru": "Самооценка, личностные расстройства: ранние схемы, режимы, ограниченное родительство",
    "relevance_en": "Self-esteem, personality disorders: early schemas, modes, limited reparenting"
  },
  {
    "id": "book-linehan-dbt",
    "category": "books",
    "citation_ru": "Linehan MM. Cognitive-Behavioral Treatment of Borderline Personality Disorder. Guilford Press; 1993.",
    "citation_en": "Linehan MM. Cognitive-Behavioral Treatment of Borderline Personality Disorder. Guilford Press; 1993.",
    "url": null,
    "relevance_ru": "Эмоциональная регуляция, ПРЛ: DBT, дистресс-толерантность, осознанность",
    "relevance_en": "Emotion regulation, BPD: DBT, distress tolerance, mindfulness"
  },
  {
    "id": "clark-anxiety-1986",
    "category": "scientificArticles",
    "citation_ru": "Clark DM, et al. A cognitive approach to panic. Behav Res Ther. 1986. PMID: 3526765.",
    "citation_en": "Clark DM, et al. A cognitive approach to panic. Behav Res Ther. 1986. PMID: 3526765.",
    "url": "https://pubmed.ncbi.nlm.nih.gov/3526765/",
    "relevance_ru": "Паника: когнитивная модель катастрофической интерпретации телесных ощущений",
    "relevance_en": "Panic: cognitive model of catastrophic misinterpretation of bodily sensations"
  },
  {
    "id": "dimidjian-ba-2006",
    "category": "scientificArticles",
    "citation_ru": "Dimidjian S, et al. Behavioral activation, cognitive therapy, and antidepressant medication in major depression (RCT). J Consult Clin Psychol. 2006. PMID: 16881773.",
    "citation_en": "Dimidjian S, et al. Behavioral activation, cognitive therapy, and antidepressant medication in major depression (RCT). J Consult Clin Psychol. 2006. PMID: 16881773.",
    "url": "https://pubmed.ncbi.nlm.nih.gov/16881773/",
    "relevance_ru": "Депрессия: поведенческая активация эффективна при тяжёлой депрессии",
    "relevance_en": "Depression: behavioral activation effective for severe depression"
  },
  {
    "id": "mikulincer-attachment-2012",
    "category": "scientificArticles",
    "citation_ru": "Mikulincer M, Shaver PR. Attachment theory and psychotherapy. J Consult Clin Psychol. 2012. PMID: 22059575.",
    "citation_en": "Mikulincer M, Shaver PR. Attachment theory and psychotherapy. J Consult Clin Psychol. 2012. PMID: 22059575.",
    "url": "https://pubmed.ncbi.nlm.nih.gov/22059575/",
    "relevance_ru": "Привязанность: применение в терапии, ментализация, безопасная база",
    "relevance_en": "Attachment: application in therapy, mentalization, secure base"
  },
  {
    "id": "cloitre-cptsd-2019",
    "category": "scientificArticles",
    "citation_ru": "Cloitre M, et al. Complex PTSD: diagnosis and treatment (ICD-11). Eur J Psychotraumatol. 2019. PMID: 30834116.",
    "citation_en": "Cloitre M, et al. Complex PTSD: diagnosis and treatment (ICD-11). Eur J Psychotraumatol. 2019. PMID: 30834116.",
    "url": "https://pubmed.ncbi.nlm.nih.gov/30834116/",
    "relevance_ru": "Комплексное ПТСР: фазовая работа, регуляция, идентичность",
    "relevance_en": "Complex PTSD: phase work, regulation, identity"
  },
  {
    "id": "shapiro-emdr-2002",
    "category": "scientificArticles",
    "citation_ru": "Shapiro F, Maxfield L. Eye Movement Desensitization and Reprocessing: mechanisms and efficacy. J Clin Psychol. 2002. PMID: 12022921.",
    "citation_en": "Shapiro F, Maxfield L. Eye Movement Desensitization and Reprocessing: mechanisms and efficacy. J Clin Psychol. 2002. PMID: 12022921.",
    "url": "https://pubmed.ncbi.nlm.nih.gov/12022921/",
    "relevance_ru": "ПТСР: EMDR эффективен, сравним с КПТ, быстрее эффект",
    "relevance_en": "PTSD: EMDR effective, comparable to CBT, faster effect"
  },
  {
    "id": "tangney-shame-2007",
    "category": "scientificArticles",
    "citation_ru": "Tangney JP, et al. Moral emotions: shame and guilt. Annu Rev Psychol. 2007. PMID: 16903808.",
    "citation_en": "Tangney JP, et al. Moral emotions: shame and guilt. Annu Rev Psychol. 2007. PMID: 16903808.",
    "url": "https://pubmed.ncbi.nlm.nih.gov/16903808/",
    "relevance_ru": "Стыд vs вина: различия, влияние на поведение, психопатологию",
    "relevance_en": "Shame vs guilt: differences, impact on behavior, psychopathology"
  },
  {
    "id": "gilbert-compassion-2006",
    "category": "scientificArticles",
    "citation_ru": "Gilbert P, Procter S. Compassion-focused therapy for shame. Clin Psychol Psychother. 2006.",
    "citation_en": "Gilbert P, Procter S. Compassion-focused therapy for shame. Clin Psychol Psychother. 2006.",
    "url": "https://doi.org/10.1002/cpp.507",
    "relevance_ru": "Стыд: сострадательно-фокусированная терапия, системы регуляции",
    "relevance_en": "Shame: compassion-focused therapy, regulation systems"
  },
  {
    "id": "cacioppo-loneliness-2008",
    "category": "scientificArticles",
    "citation_ru": "Cacioppo JT, Patrick W. Loneliness: evolution and psychology of social pain. Curr Dir Psychol Sci. 2008.",
    "citation_en": "Cacioppo JT, Patrick W. Loneliness: evolution and psychology of social pain. Curr Dir Psychol Sci. 2008.",
    "url": "https://doi.org/10.1111/j.1467-8721.2008.00588.x",
    "relevance_ru": "Одиночество: эволюционный сигнал, цикл гиперчувствительности к угрозе",
    "relevance_en": "Loneliness: evolutionary signal, hypervigilance to threat cycle"
  },
  {
    "id": "prochaska-stages-1983",
    "category": "scientificArticles",
    "citation_ru": "Prochaska JO, DiClemente CC. Transtheoretical model of change. Psychother Theory Res Pract. 1983.",
    "citation_en": "Prochaska JO, DiClemente CC. Transtheoretical model of change. Psychother Theory Res Pract. 1983.",
    "url": "https://doi.org/10.1037/h0090868",
    "relevance_ru": "Мотивация: стадии изменений, вмешательства по стадиям",
    "relevance_en": "Motivation: stages of change, stage-matched interventions"
  },
  {
    "id": "miller-mi-meta-2005",
    "category": "scientificArticles",
    "citation_ru": "Rubak S, et al. Motivational interviewing: meta-analysis. Br J Gen Pract. 2005. PMID: 15904555.",
    "citation_en": "Rubak S, et al. Motivational interviewing: meta-analysis. Br J Gen Pract. 2005. PMID: 15904555.",
    "url": "https://pubmed.ncbi.nlm.nih.gov/15904555/",
    "relevance_ru": "Мотивация: МИ эффективно при аддикциях, диабете, гипертонии",
    "relevance_en": "Motivation: MI effective for addictions, diabetes, hypertension"
  }
];
