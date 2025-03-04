export const traitData = {
  "traits": [
    {
      "traitName": "Lactose Intolerance (Adult Lactase Non-Persistence)",
      "effectSize": "Near-monogenic",
      "associatedSNPs": [
        "rs4988235 in LCT/MCM6 gene region"
      ],
      "inheritancePattern": "Dominant for persistence (T allele) and recessive for non-persistence",
      "generalDescription": "Lactase persistence allows lactose digestion in adulthood, while non-persistence causes lactose intolerance. A C→T mutation in an enhancer of the LCT gene is the primary cause in European populations.",
      "predictiveStrength": "High – rs4988235 genotypes are highly predictive: C/C are typically intolerant, T/T are tolerant, and C/T are often tolerant.",
      "references": [
        "Enattah et al. (2002)",
        "SNPedia summary"
      ]
    },
    {
      "traitName": "Earwax Type (Wet vs. Dry Cerumen)",
      "effectSize": "Monogenic",
      "associatedSNPs": [
        "rs17822931 in ABCC11 gene"
      ],
      "inheritancePattern": "Single-gene, two-allele Mendelian (G allele dominant for wet; A allele recessive for dry)",
      "generalDescription": "Earwax consistency is determined by the ABCC11 gene variant rs17822931. Individuals with at least one G allele have wet earwax, while AA homozygotes have dry earwax.",
      "predictiveStrength": "Very high – rs17822931 almost perfectly predicts earwax phenotype.",
      "references": [
        "Yoshiura et al. (2006)",
        "Classic pedigree studies",
        "Wikipedia/OMIM entries"
      ]
    },
    {
      "traitName": "Bitter Taste Perception (PTC/PROP Tasting)",
      "effectSize": "Monogenic (highly predictive haplotype)",
      "associatedSNPs": [
        "rs713598",
        "rs1726866",
        "rs10246939 in TAS2R38 gene"
      ],
      "inheritancePattern": "Dominant for tasting ability",
      "generalDescription": "The ability to taste the bitter compound PTC is determined by TAS2R38 haplotypes. The PAV haplotype (taster) is dominant over the AVI haplotype (non-taster), so individuals with at least one PAV allele can taste PTC.",
      "predictiveStrength": "High – TAS2R38 genotype predicts tasting status in the vast majority of individuals.",
      "references": [
        "Kim et al. (2003)",
        "Bufe et al. (2005)",
        "Boxer & Garneau (2015)"
      ]
    },
    {
      "traitName": "Blood Type (ABO Blood Group)",
      "effectSize": "Monogenic",
      "associatedSNPs": [
        "rs8176719 in the ABO gene (identifies the O allele)",
        "rs8176746 for A/B distinction"
      ],
      "inheritancePattern": "Co-dominant with multiple alleles",
      "generalDescription": "The ABO blood group is determined by variants in the ABO gene. A frameshift mutation (rs8176719) causes the O allele, while additional SNPs distinguish A and B alleles. A and B are codominant, and O is recessive.",
      "predictiveStrength": "Very high – ABO genotype fully predicts the blood type.",
      "references": [
        "SNPedia summary",
        "Yamamoto et al. (1990)",
        "OMIM"
      ]
    },
    {
      "traitName": "Alcohol Flush Reaction (ALDH2 Deficiency)",
      "effectSize": "Monogenic, high effect size variant",
      "associatedSNPs": [
        "rs671 in ALDH2 gene"
      ],
      "inheritancePattern": "Dominant negative",
      "generalDescription": "The alcohol flush reaction is caused by the ALDH2*2 variant (rs671) which results in an inactive enzyme, leading to acetaldehyde buildup and flushing after alcohol consumption.",
      "predictiveStrength": "High – presence of the rs671 A allele strongly predicts the flush reaction.",
      "references": [
        "Harada et al. (1981)",
        "Chen et al. (1999)",
        "Li et al. (2006)"
      ]
    },
    {
      "traitName": "Sickle Cell Trait and Anemia (Hemoglobin S)",
      "effectSize": "Monogenic",
      "associatedSNPs": [
        "rs334 in HBB gene"
      ],
      "inheritancePattern": "Autosomal recessive",
      "generalDescription": "Sickle cell anemia is caused by a T→A substitution in the HBB gene (rs334), leading to the hemoglobin S variant. Homozygotes (T/T) develop the disease; heterozygotes (A/T) are carriers with the sickle cell trait.",
      "predictiveStrength": "Deterministic for disease in homozygotes and highly predictive for carrier status.",
      "references": [
        "Ingram (1957)",
        "Pauling et al. (1949)",
        "Allison (1954)"
      ]
    },
    {
      "traitName": "Hereditary Hemochromatosis (Iron Overload Disorder)",
      "effectSize": "Monogenic (with incomplete penetrance)",
      "associatedSNPs": [
        "rs1800562 in HFE gene (C282Y mutation)"
      ],
      "inheritancePattern": "Autosomal recessive with sex-influenced expression",
      "generalDescription": "Hereditary hemochromatosis is characterized by excessive iron absorption due to the C282Y mutation in the HFE gene. Homozygotes for this mutation are at high risk for iron overload, though clinical manifestation varies.",
      "predictiveStrength": "High for genetic risk, though clinical expression is variable due to incomplete penetrance and modifiers.",
      "references": [
        "Feder et al. (1996)",
        "SNPedia overview",
        "Bacon et al. (2011)"
      ]
    },
    {
      "traitName": "Red Hair Color (MC1R-Related)",
      "effectSize": "Primarily monogenic (oligogenic influence)",
      "associatedSNPs": [
        "rs1805007",
        "rs1805008",
        "rs1805009 in MC1R gene"
      ],
      "inheritancePattern": "Autosomal recessive",
      "generalDescription": "Red hair is largely determined by loss-of-function variants in the MC1R gene. Individuals with two non-functional MC1R alleles typically exhibit red hair, fair skin, and freckling.",
      "predictiveStrength": "Very high – MC1R genotype predicts red hair with near-perfect accuracy when two strong loss-of-function alleles are present.",
      "references": [
        "Larkin et al. (2015)",
        "Box et al. (1997)",
        "OMIM entry for MC1R"
      ]
    },
    {
      "traitName": "Eye Color",
      "effectSize": "Polygenic",
      "associatedSNPs": [
        "rs12913832 (HERC2/OCA2)",
        "rs1800407 (OCA2)",
        "rs12203592 (IRF4)",
        "rs12896399 (SLC24A4)"
      ],
      "inheritancePattern": "Polygenic (additive) – no simple dominant/recessive pattern; multiple genes contribute.",
      "generalDescription": "Eye color is determined by the amount and type of melanin in the iris, controlled by many genes. The HERC2-OCA2 locus is the single largest genetic influence; an intronic SNP in HERC2 (rs12913832) is key in distinguishing blue vs. brown eyes. However, additional genes like OCA2, IRF4, SLC24A4, and TYR further modulate iris pigmentation.",
      "possibleRangesOrVariability": "Iris color ranges from light blue to green/hazel to dark brown. Different genotypes at HERC2/OCA2 can yield blue, intermediate hazel, or brown eyes. Most SNP effects are small and additive; environmental factors have little influence.",
      "references": [
        "D’Onofrio et al. (2023)",
        "Sturm (2009)",
        "Liu et al. (2009)"
      ]
    },
    {
      "traitName": "Hair Color",
      "effectSize": "Polygenic",
      "associatedSNPs": [
        "rs1805007 (MC1R)",
        "rs1805008 (MC1R)",
        "rs12203592 (IRF4)",
        "rs12896399 (SLC24A4)"
      ],
      "inheritancePattern": "Polygenic (additive) – multiple genes influence hair shade; red hair requires biallelic loss-of-function in MC1R, while other colors are determined additively.",
      "generalDescription": "Hair color is determined by the type and amount of melanin in hair shafts – primarily eumelanin and pheomelanin. The MC1R gene is a major contributor to red hair, while variants in IRF4 and SLC24A4 are linked to lighter hair. Other genes such as ASIP, KITLG, OCA2, SLC45A2, TYR, and TYRP1 also influence hair pigmentation, producing a continuous spectrum.",
      "possibleRangesOrVariability": "Natural hair color ranges from very light blonde to black, with red hair as a distinct category. Allele combinations yield gradual changes in pigmentation; environmental factors like sun exposure may temporarily lighten hair.",
      "references": [
        "MedlinePlus Genetics – Hair Color and Genetics",
        "Bortsov et al. (2019)",
        "Han et al. (2008)"
      ]
    },
    {
      "traitName": "Skin Tone",
      "effectSize": "Polygenic",
      "associatedSNPs": [
        "rs1426654 (SLC24A5)",
        "rs16891982 (SLC45A2)",
        "rs1042602 (TYR)",
        "rs642742 (ASIP)"
      ],
      "inheritancePattern": "Polygenic (additive) – numerous genes contribute with incomplete dominance effects.",
      "generalDescription": "Skin tone is controlled by multiple genetic factors that regulate melanin synthesis, distribution, and degradation. Key genes such as SLC24A5 and SLC45A2 are major determinants of light versus dark pigmentation, with additional contributions from TYR, OCA2, and others identified in diverse populations.",
      "possibleRangesOrVariability": "Skin tone shows continuous variation from very light to very dark. Each SNP's effect is subtle, but their additive effects produce a wide range. Environmental factors (like sun exposure) can temporarily darken the skin, though baseline tone is genetically set.",
      "references": [
        "Soejima & Koda (2007)",
        "Stokowski et al. (2007)",
        "Tishkoff et al. (2017)"
      ]
    },
    {
      "traitName": "Height",
      "effectSize": "Polygenic",
      "associatedSNPs": [
        "rs1042725 (HMGA2)",
        "rs143384 (GDF5)",
        "rs10938397 (GNPDA2)",
        "[plus thousands of additional variants]"
      ],
      "inheritancePattern": "Polygenic (additive) – each tall allele adds slightly to height and each short allele subtracts; no simple dominant/recessive pattern.",
      "generalDescription": "Adult height is one of the most polygenic human traits. GWAS have identified thousands of SNPs associated with height, each contributing a minute effect. For example, rs1042725 in HMGA2 increases height by approximately 0.4 cm per allele. Collectively, these variants account for an estimated 10–40% of heritable height variation.",
      "possibleRangesOrVariability": "Height typically ranges from about 145 cm to over 200 cm. The cumulative additive effects of numerous alleles create a bell-curve distribution in populations. Environmental factors, such as nutrition, also influence final height.",
      "references": [
        "Weedon et al. (2007)",
        "Yengo et al. (2022)",
        "Visscher et al. (2010)"
      ]
    }
  ]
}
