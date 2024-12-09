package com.gestionEtudiant.ems.entity;


import jakarta.persistence.*;


import lombok.NoArgsConstructor;



@Entity
@Table(name = "NOTES")
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "idÉtudiant")
    private Long idEtudiant;

    @Column(name = "nomDuCours")
    private String nomDuCours;

    @Column(name = "valeurDeNote")
    private Double valeurDeNote;

    public Note() {
        // Optionally initialize fields
    }

    // Constructeur avec arguments
    public Note(Long id, Long idEtudiant, String nomDuCours, Double valeurDeNote) {
        this.id = id;
        this.idEtudiant = idEtudiant;
        this.nomDuCours = nomDuCours;
        this.valeurDeNote = valeurDeNote;
    }

    // Getter et Setter pour id
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Getter et Setter pour idEtudiant
    public Long getIdEtudiant() {
        return idEtudiant;
    }

    public void setIdEtudiant(Long idEtudiant) {
        this.idEtudiant = idEtudiant;
    }

    // Getter et Setter pour nomDuCours
    public String getNomDuCours() {
        return nomDuCours;
    }

    public void setNomDuCours(String nomDuCours) {
        this.nomDuCours = nomDuCours;
    }

    // Getter et Setter pour valeurDeNote
    public Double getValeurDeNote() {
        return valeurDeNote;
    }

    public void setValeurDeNote(Double valeurDeNote) {
        this.valeurDeNote = valeurDeNote;
    }
}
