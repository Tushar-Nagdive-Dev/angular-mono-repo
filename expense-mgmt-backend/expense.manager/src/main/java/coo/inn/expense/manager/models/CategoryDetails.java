package coo.inn.expense.manager.models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "category_details")
@Setter @Getter @NoArgsConstructor @ToString
public class CategoryDetails {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "category_name", nullable = false)
    private String categoryName;

    @Column(name = "category_code", nullable = false)
    private String categoryCode;

    public static enum CategoryTypes {
        VARIABLE_EXPENSE, FIXED_EXPENSE
    }

    @Column(nullable = false)
    private CategoryTypes types;

    @Column(name = "is_parent_category")
    private Boolean isParentCategory = true;

    @Column(name = "is_custom_category")
    private Boolean isCategoryUserDefined = false;

    @ElementCollection
    @Column(name = "sub_category_codes")
    private List<String> subCategoryCodes;
}
