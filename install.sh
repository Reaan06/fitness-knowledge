#!/bin/bash

# Fitness Knowledge Skill - Installation Script
# Usage: curl -fsSL https://raw.githubusercontent.com/Reaan06/fitness-knowledge/main/install.sh | bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Print functions
print_header() {
    echo ""
    echo -e "${CYAN}============================================================${NC}"
    echo -e "${CYAN}🏋️  Fitness Knowledge Skill Installer${NC}"
    echo -e "${CYAN}============================================================${NC}"
    echo ""
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_step() {
    echo -e "${CYAN}→ $1${NC}"
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
check_prerequisites() {
    print_step "Checking prerequisites..."
    
    # Check Node.js
    if command_exists node; then
        NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
        if [ "$NODE_VERSION" -ge 14 ]; then
            print_success "Node.js $(node -v) found"
        else
            print_error "Node.js 14+ required, found $(node -v)"
            exit 1
        fi
    else
        print_error "Node.js not found. Please install Node.js 14+"
        print_info "Visit: https://nodejs.org/"
        exit 1
    fi
    
    # Check npm
    if command_exists npm; then
        print_success "npm $(npm -v) found"
    else
        print_error "npm not found"
        exit 1
    fi
    
    # Check git
    if command_exists git; then
        print_success "git $(git --version | cut -d' ' -f3) found"
    else
        print_warning "git not found (optional for installation)"
    fi
    
    echo ""
}

# Clone repository
clone_repository() {
    print_step "Cloning repository..."
    
    REPO_URL="https://github.com/Reaan06/fitness-knowledge.git"
    INSTALL_DIR="$HOME/.fitness-knowledge"
    
    # Remove existing installation if present
    if [ -d "$INSTALL_DIR" ]; then
        print_warning "Existing installation found at $INSTALL_DIR"
        print_info "Removing old installation..."
        rm -rf "$INSTALL_DIR"
    fi
    
    # Clone repository
    if git clone "$REPO_URL" "$INSTALL_DIR"; then
        print_success "Repository cloned to $INSTALL_DIR"
    else
        print_error "Failed to clone repository"
        exit 1
    fi
    
    echo ""
}

# Install dependencies
install_dependencies() {
    print_step "Installing dependencies..."
    
    cd "$INSTALL_DIR"
    
    if npm install; then
        print_success "Dependencies installed"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
    
    echo ""
}

# Create symlinks
create_symlinks() {
    print_step "Creating symlinks..."
    
    BIN_DIR="$HOME/.local/bin"
    
    # Create bin directory if it doesn't exist
    mkdir -p "$BIN_DIR"
    
    # Create symlinks
    if ln -sf "$INSTALL_DIR/bin/fitness-knowledge.js" "$BIN_DIR/fitness-knowledge"; then
        print_success "Created symlink: fitness-knowledge"
    else
        print_error "Failed to create symlink: fitness-knowledge"
    fi
    
    if ln -sf "$INSTALL_DIR/bin/fitness-knowledge.js" "$BIN_DIR/fk"; then
        print_success "Created symlink: fk"
    else
        print_error "Failed to create symlink: fk"
    fi
    
    echo ""
}

# Update PATH
update_path() {
    print_step "Updating PATH..."
    
    BIN_DIR="$HOME/.local/bin"
    
    # Check if PATH already contains the bin directory
    if [[ ":$PATH:" != *":$BIN_DIR:"* ]]; then
        # Add to .bashrc if it exists
        if [ -f "$HOME/.bashrc" ]; then
            echo "export PATH=\"\$PATH:$BIN_DIR\"" >> "$HOME/.bashrc"
            print_success "Added $BIN_DIR to PATH in .bashrc"
        fi
        
        # Add to .zshrc if it exists
        if [ -f "$HOME/.zshrc" ]; then
            echo "export PATH=\"\$PATH:$BIN_DIR\"" >> "$HOME/.zshrc"
            print_success "Added $BIN_DIR to PATH in .zshrc"
        fi
        
        print_warning "Please restart your shell or run: export PATH=\"\$PATH:$BIN_DIR\""
    else
        print_success "PATH already configured"
    fi
    
    echo ""
}

# Verify installation
verify_installation() {
    print_step "Verifying installation..."
    
    BIN_DIR="$HOME/.local/bin"
    
    # Check if symlinks exist
    if [ -L "$BIN_DIR/fitness-knowledge" ]; then
        print_success "fitness-knowledge command available"
    else
        print_error "fitness-knowledge command not found"
    fi
    
    if [ -L "$BIN_DIR/fk" ]; then
        print_success "fk command available"
    else
        print_error "fk command not found"
    fi
    
    echo ""
}

# Print completion message
print_completion() {
    echo -e "${GREEN}============================================================${NC}"
    echo -e "${GREEN}✅ Installation Complete!${NC}"
    echo -e "${GREEN}============================================================${NC}"
    echo ""
    echo -e "Usage:"
    echo -e "  ${CYAN}fitness-knowledge help${NC}     Show help"
    echo -e "  ${CYAN}fitness-knowledge list${NC}     List all modules"
    echo -e "  ${CYAN}fitness-knowledge show${NC}     Show a module"
    echo -e "  ${CYAN}fk help${NC}                    Short alias"
    echo ""
    echo -e "Quick start:"
    echo -e "  ${CYAN}fitness-knowledge topics${NC}   List all topics"
    echo -e "  ${CYAN}fitness-knowledge random${NC}   Get a random tip"
    echo ""
    echo -e "Documentation:"
    echo -e "  ${CYAN}https://github.com/Reaan06/fitness-knowledge${NC}"
    echo ""
    echo -e "If you like this project, please give it a ⭐ on GitHub!"
    echo ""
}

# Main function
main() {
    print_header
    
    check_prerequisites
    clone_repository
    install_dependencies
    create_symlinks
    update_path
    verify_installation
    print_completion
}

# Run main function
main "$@"
