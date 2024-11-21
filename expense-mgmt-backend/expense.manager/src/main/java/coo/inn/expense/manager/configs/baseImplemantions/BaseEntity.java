package coo.inn.expense.manager.configs.baseImplemantions;

import java.time.LocalDateTime;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import coo.inn.expense.manager.configs.JwtTokenContext;
import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseEntity {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id;

    @Column(name = "created_time", updatable = false) 
    private LocalDateTime createdTime; 
    
    @Column(name = "modified_time") 
    private LocalDateTime modifiedTime; 
    
    @Column(name = "creator", updatable = false) 
    private String creator; 
    
    @Column(name = "modifier") 
    private String modifier; 
    
    @Column(name = "creator_id", updatable = false) 
    private Long creatorId; 
    
    @Column(name = "modifier_id") 
    private Long modifierId;

    @PrePersist 
    protected void onCreate() {
        this.createdTime = LocalDateTime.now();
        this.creatorId = JwtTokenContext.getUserId();
        this.creator = JwtTokenContext.getUsername();
    }

    @PreUpdate
    protected void onUpdate() {
        this.modifiedTime = LocalDateTime.now();
        this.modifierId = JwtTokenContext.getUserId();
        this.modifier = JwtTokenContext.getUsername();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(LocalDateTime createdTime) {
        this.createdTime = createdTime;
    }

    public LocalDateTime getModifiedTime() {
        return modifiedTime;
    }

    public void setModifiedTime(LocalDateTime modifiedTime) {
        this.modifiedTime = modifiedTime;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getModifier() {
        return modifier;
    }

    public void setModifier(String modifier) {
        this.modifier = modifier;
    }

    public Long getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(Long creatorId) {
        this.creatorId = creatorId;
    }

    public Long getModifierId() {
        return modifierId;
    }

    public void setModifierId(Long modifierId) {
        this.modifierId = modifierId;
    }

}
