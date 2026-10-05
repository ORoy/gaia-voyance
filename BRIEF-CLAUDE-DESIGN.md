# Brief — Gaia Voyance

Conçois la maquette d'un site d'une seule page pour **Gaia Voyance**, une médium de la ville de Québec. Le site doit présenter ses deux séances et amener le visiteur à réserver.

## Le sujet

Une médium qui offre des séances de canalisation, en Zoom ou en personne. Ses clients sont souvent des gens en deuil ou en questionnement, qui hésitent à franchir le pas. Le site doit les rassurer avant tout. Il doit se sentir comme entrer chez quelqu'un de doux et de sérieux, pas dans une boutique ésotérique.

## Le rôle de la page

1. Faire comprendre en quelques secondes ce que sont les deux séances.
2. Donner confiance (une vraie personne, un ton posé, un prix clair).
3. Rendre la réservation évidente et facile.

## Ton et voix

- Français du Québec, **vouvoiement**, voix douce et posée.
- Phrases courtes, concrètes, sans jargon. Pas de promesses miracles.
- Chaleureux et mystérieux, professionnel, **sans cliché**.

## Direction visuelle

Deux références: le site de Mélanie Hotte (portrait, grande phrase d'accroche, bouton de réservation répété, sobriété) et un moodboard de peintures, tarots anciens, lumière de bougie, mousse et saule, ciels étoilés.

**Base lumineuse et boisée.** Fond parchemin légèrement verdâtre, texte brun très foncé, vert mousse, ambre, lumière de bougie. Matières peintes et papier vieilli, grain léger. Rien de lisse ni de numérique.

**Un seul moment nocturne.** Une section en bleu nuit étoilé (la section des séances, ou une bande qui l'encadre) est l'élément mémorable de la page. Le reste reste calme et discipliné.

**Accents rares.** Un tarot ancien, un motif égyptien, un soleil et une lune, utilisés comme gravures isolées, jamais comme décor répété.

**À éviter.**
- Boule de cristal, violet et or, étoiles partout, polices «mystiques».
- Cartes toutes identiques avec les mêmes ombres grises.
- Étiquettes en majuscules espacées au-dessus de chaque titre.
- Un seul mot accentué en italique ou en couleur dans les titres.
- Flèche «→» sur chaque lien.
- Animations d'apparition sur chaque section. Un seul moment de mouvement, à l'ouverture, ou rien.

Palette de départ (tu peux ajuster pour l'harmonie et l'accessibilité):

| Nom | Hex |
|---|---|
| Parchemin | `#EEE8D5` |
| Mousse | `#4E5A3A` |
| Ambre | `#B5742B` |
| Bougie | `#E9B65C` |
| Nuit | `#16223B` |
| Encre | `#2B2519` |

Typographie: une famille avec du caractère pour les titres (chaleureuse, avec une touche de gravure ancienne, pas la serif habituelle) et une police sobre et très lisible pour le texte. Lignes de moins de 80 caractères, interligne généreux.

## Structure (une page, menu ancré)

1. **Accueil**: phrase d'accroche, portrait (espace réservé), bouton «Réserver une séance».
2. **Les séances**: deux séances, en section nocturne.
3. **Comment ça se passe**: 3 ou 4 étapes numérotées (c'est une vraie suite).
4. **À propos**: texte court et portrait.
5. **Témoignages**: 2 ou 3 messages courts (section masquable).
6. **Réserver**: zone pour un calendrier Cal.com intégré (prévoir un cadre vide d'environ 700 px de haut).
7. **FAQ**: 4 à 5 questions, en accordéon.
8. **Pied de page**: ville, courriel, réseaux sociaux.

Le bouton de réservation reste visible dans la navigation et dans l'accueil. Sur mobile, prévoir un bouton fixe discret.

## Contenu à utiliser (provisoire)

**Séances**

- **Canalisation Guide**
  - Une rencontre avec vos guides, pour recevoir des réponses et un éclairage sur ce que vous traversez.
  - Tarot inclus.
  - 1 h · Zoom ou en personne · 120 $
- **Canalisation Défunt**
  - Une rencontre pour recevoir des messages d'un proche décédé.
  - Tarot inclus.
  - 1 h · Zoom ou en personne · 120 $

Les descriptions finales viendront de la médium. Garde la mise en page flexible pour 2 à 4 phrases par séance.

**Accroche (à tester)**

> Un moment calme pour recevoir ce qui cherche à vous parvenir.

**Comment ça se passe (à valider)**

1. Vous choisissez une séance et une plage horaire.
2. Vous recevez un courriel de confirmation avec tous les détails.
3. Nous nous rencontrons, en personne ou sur Zoom.
4. Vous repartez avec ce qui a été reçu pendant la séance.

**FAQ (questions seulement, réponses à fournir)**

- Comment se déroule une séance?
- Zoom ou en personne, quelle différence?
- Comment payer?
- Puis-je annuler ou changer l'heure?
- Que dois-je apporter ou préparer?

**Pied de page**: Gaia Voyance · Québec · courriel et réseaux à venir.

## Contraintes techniques

- Page unique en HTML, CSS et JavaScript simples, sans framework, qui sera publiée sur GitHub Pages.
- Texte facile à modifier à la main.
- Responsive, avec le mobile en priorité (la plupart des visiteurs arriveront par téléphone).
- Accessible: contraste suffisant, focus clavier visible, mouvement réduit respecté.
- Espaces réservés clairs pour la photo, le calendrier et les témoignages.

## Livrable attendu

Une maquette de la page complète, en version bureau et mobile, avec la section nocturne comme point fort. Présente aussi un court choix typographique et la palette retenue.
