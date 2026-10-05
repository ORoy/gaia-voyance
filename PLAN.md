# Gaia Voyance — Plan du site

Site vitrine d'une page pour une médium de la ville de Québec. Objectif unique: présenter les deux séances et permettre de réserver sans friction.

## Décisions prises

| Sujet | Décision |
|---|---|
| Marque | Gaia Voyance (logotype en texte au départ) |
| Domaine | `gaiavoyance.ca` (à acheter, ~15–20 $/an) |
| Langue | Français du Québec, vouvoiement, ton doux et posé |
| Ton | Chaleureux et mystérieux, professionnel, sans cliché |
| Séances | **Canalisation Guide** et **Canalisation Défunt**, tarot inclus dans les deux |
| Formats | Zoom ou présentiel (ville de Québec) |
| Prix / durée | 120 $ pour 1 h, identique partout. Prix affiché |
| Paiement | En personne (présentiel). Virement Interac avant la séance (Zoom) |
| Réservation | Cal.com (gratuit), synchronisé avec Google Agenda |
| Annulation | Le client peut annuler ou reprogrammer jusqu'à 24 h avant. Pas de texte légal pour l'instant |
| Architecture | Une seule page statique qui défile (HTML/CSS/JS, sans framework) |
| Hébergement | GitHub Pages + domaine personnalisé |
| Mises à jour | Faites par Olivier dans les fichiers du site |
| Adresse | Afficher la ville seulement. L'adresse exacte va dans le courriel de confirmation |

## Structure de la page

1. **Accueil** — phrase d'accroche, portrait, bouton «Réserver une séance».
2. **Les séances** — deux cartes (Guide, Défunt), mention du tarot inclus, formats, durée, prix.
3. **Comment ça se passe** — 3 ou 4 étapes. C'est une vraie suite, donc la numérotation est justifiée ici.
4. **À propos** — parcours et façon de travailler de la médium.
5. **Témoignages** — 2 ou 3 courts messages. Section masquable si vide au lancement.
6. **Réserver** — calendrier Cal.com intégré.
7. **FAQ** — 4 à 5 questions.
8. **Pied de page** — ville, courriel, réseaux sociaux.

Le bouton de réservation est présent dans la navigation et dans les sections Accueil et Séances.

## Direction visuelle

Inspirations: le site de Mélanie Hotte (sobriété, portrait, accroche émotionnelle, bouton répété) et le moodboard Pinterest «Symbolism» d'Olivier.

- **Base lumineuse et boisée**: crème, vert mousse, ambre, lumière de bougie.
- **Matières**: peinture, papier vieilli, grain léger. Éviter le lisse et le numérique.
- **Un seul moment nocturne**: une section bleu nuit étoilé (proposée pour les séances). C'est l'élément mémorable de la page. Le reste reste calme.
- **Accents rares**: tarot ancien, motifs égyptiens, soleil et lune. Jamais en décor répété.
- **À éviter**: boule de cristal, violet et or, polices «mystiques», étoiles partout, bouton «→» sur chaque lien.

Palette de départ (à ajuster dans Claude Design):

| Nom | Hex | Rôle |
|---|---|---|
| Parchemin | `#EEE8D5` | Fond principal |
| Mousse | `#4E5A3A` | Titres, éléments secondaires |
| Ambre | `#B5742B` | Boutons, accents |
| Bougie | `#E9B65C` | Lueurs, survols |
| Nuit | `#16223B` | Section nocturne |
| Encre | `#2B2519` | Texte courant (brun très foncé) |

## Réservation (Cal.com)

Quatre types de rendez-vous, tous de 60 minutes:

- Canalisation Guide — Zoom
- Canalisation Guide — présentiel
- Canalisation Défunt — Zoom
- Canalisation Défunt — présentiel

À configurer:
- Synchronisation avec le Google Agenda de la médium.
- Lien Zoom généré automatiquement pour les types Zoom.
- Champ «Adresse» envoyé seulement dans la confirmation des types présentiel.
- Mention du virement Interac dans la confirmation des types Zoom.
- Annulation et reprogrammation permises jusqu'à 24 h avant.
- Rappels par courriel.

À vérifier avant de s'engager: les limites actuelles du forfait gratuit de Cal.com (types de rendez-vous, rappels, intégration Zoom).

## Mise en ligne

1. Construire le site statique dans ce dossier.
2. Créer un dépôt public sur GitHub et activer GitHub Pages.
3. Acheter `gaiavoyance.ca` chez un registraire canadien et le pointer vers GitHub Pages (fichier `CNAME`, enregistrements DNS, HTTPS activé).
4. Intégrer le calendrier Cal.com dans la section «Réserver».

## À fournir par la médium (en attente)

- [ ] Parcours et façon de travailler (pour l'À propos). Ouvert: Q6.
- [ ] Description de chaque canalisation, dans ses mots: ce qui se passe, à qui ça s'adresse, ce que le tarot apporte. Ouvert: Q24.
- [ ] Une photo naturelle d'elle. Un espace réservé en attendant. Ouvert: Q8.
- [ ] 2 ou 3 témoignages, avec la permission des clients.
- [ ] Confirmation de la ville ou du quartier affiché.
- [ ] Courriel et réseaux sociaux à afficher.

## À décider plus tard

- Nombre exact et titres des étapes de «Comment ça se passe».
- Texte légal et politique d'annulation écrite (reporté volontairement).
- Vrai logo (le logotype en texte suffit au lancement).
- Version anglaise.

## Prochaines étapes

1. Coller `BRIEF-CLAUDE-DESIGN.md` dans Claude Design et itérer sur la maquette.
2. Recueillir les textes et la photo auprès de la médium.
3. Construire la page statique.
4. Configurer Cal.com et l'intégrer.
5. Acheter le domaine et publier.
